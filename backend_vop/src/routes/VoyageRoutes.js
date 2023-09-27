const express = require("express")
const voyageController = require("../controllers/Voyages.controller")
const router = express.Router()
const upload = require("../middlewares/uploadfile.middleware")
const checkAuth = require("../middlewares/auth.middlewares")
const adminOnly = require("../middlewares/adminOnly.middleware")

/*********ROUTES HOTELS */
router.post("/hotel", upload, voyageController.createHotel)
router.get("/hotel/:id", voyageController.getHotel)
<<<<<<< HEAD
=======
router.get("/hotel",voyageController.getHotels)
>>>>>>> 56b720538d4ec93e374de593b3e8fc19349ce8ec
/*********ROUTES DESTINATIONS */
router.post("/destination", voyageController.creaDestination)
router.get("/destination", voyageController.getDestinations)
router.get("/destination/:id", voyageController.getDestination)
router.delete("/destination/:id", voyageController.deleteDestination)
/*********ROUTES VOLS */
router.get("/vol", voyageController.getVols)
router.get("/vol/:id", voyageController.getVol)
router.post("/vol", voyageController.CreateVol)
router.delete("/vol/:id", voyageController.deleteVol)
/*********ROUTES RESERVATIONS */

router.post("/reservation",checkAuth.checkAuth, voyageController.createReservation)
router.get("/reservation", adminOnly,voyageController.getReservations)
router.get("/reservation/moi/:id",checkAuth.checkAuth, voyageController.getMyReservation)
/*********ROUTES PAYER */


module.exports = router
