const models = require("../../models");

/****************CRUD HOTEL****************** */
module.exports.createHotel = async (req, res) => {
  const { originalname } = req.file;
  let { description, capacite, tarifnuit, equipement, destinationId } =
    req.body;
  destinationId = await models.Destination.findByPk(destinationId);
  if (!destinationId.id) {
    return res.status(401).json({
      message: "mauvaise destination choisie",
    });
  }

  try {
    const response = await models.Hotel.create({
      description,
      capacite,
      tarifnuit,
      equipement,
      destinationId: destinationId?.id,
      imagepath: originalname,
    });

    if (response) {
      return res.status(201).json({
        message: "l'hotel a été bien créé",
      });
    } else {
      return res.status(404).json({
        message: "l'enregistrement n'a pas marché",
      });
    }
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
module.exports.deleteHotel = async (req, res) => {
  const { id } = req.params;
  try {
    // const deletedHostel = await query.query(`DELETE FROM hotels WHERE hotels.id = ? `, [id])
    // if (deletedHostel?.affectedRows > 0) {
    //     return res.status(200).json({
    //         message: `l'hôtel avec l'id ${id} a été supprimé`
    //     })
    // }
    // else {
    //     return res.status(404).json({
    //         message: `l'id ${id} fourni ne correspond à aucun hôtel`
    //     })
    // }
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
module.exports.getHotels = async (req, res) => {
  try {
    const hotels = await models.Hotel.findAll();
    res.status(200).json({
      hotels,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

module.exports.getHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await models.Hotel.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: models.Destination,
          as: "destination",
        },
      ],
    });
    res.status(201).json({
      hotel,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
/************FIN CRUD HOTEL********************** */

/************ CRUD DESTINATION********************** */
module.exports.creaDestination = async (req, res) => {
  const { namedestination } = req.body;
  if (!namedestination) {
    return res.status(401).json({
      error: "tous les champs sont obligatoires !",
    });
  }

  try {
    await models.Destination.create({ namedestination });
    res.status(201).json({
      message: "la destination a été bien enregistrée",
    });
  } catch (error) {
    res.status(403).json({
      error,
    });
  }
};
module.exports.getDestinations = async (req, res) => {
  try {
    const destinations = await models.Destination.findAll();
    res.status(201).json({
      destinations,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
module.exports.getDestination = async (req, res) => {
  const { id } = req.params;
  try {
    const destination = await models.Destination.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: models.Vol,
          as: "vols",
        },
        {
          model: models.Hotel,
          as: "hotels",
        },
      ],
    });
    res.status(201).json({
      destination,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
module.exports.deleteDestination = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDestination = await models.Destination.destroy({
      where: {
        id: id,
      },
    });
    if (deletedDestination) {
      return res.status(200).json({
        message: `la destination avec l'id ${id} a été supprimé`,
      });
    } else {
      return res.status(404).json({
        message: `l'id ${id} fourni ne correspond à aucune destination`,
      });
    }
  } catch (error) {
    res.status(40).json({
      error,
    });
  }
};
/************FIN CRUD DESTINATION********************** */

/****************CRUD VOLS************* */
module.exports.getVols = async (req, res) => {
  try {
    const vols = await models.Vol.findAll();
    res.status(201).json({
      vols,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

module.exports.getVol = async (req, res) => {
  const { id } = req.params;
  try {
    const vol = await models.Vol.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: models.Destination,
          as: "destination",
        },
      ],
    });
    res.status(201).json({
      vol,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
module.exports.CreateVol = async (req, res) => {
  const {
    numerovol,
    compagnieaerienne,
    aeroportdepart,
    aeroport,
    aeroportarrivee,
    dateheuredepart,
    dateheurearrivee,
    destinationId,
  } = req.body;
  try {
    await models.Vol.create({
      numerovol,
      compagnieaerienne,
      aeroportdepart,
      aeroport,
      aeroportarrivee,
      dateheuredepart,
      dateheurearrivee,
      destinationId,
    });
    res.status(201).json({
      message: "le vol a été créé avec succès",
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};

module.exports.deleteVol = async (req, res) => {
  const { id } = req.params;
  try {
    const vol = await models.Vol.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "le vol a été supprimé avec succès",
      vol,
    });
  } catch (error) {
    res.status(501).json({
      error,
    });
  }
};

/******************CRUD RESERVATION *****/
module.exports.createReservation = async (req, res) => {
  const {
    nbadulte,
    nbbebe,
    nbchambre,
    datearrivee,
    datedepart,
    destinationId,
    userId,
  } = req.body;
  // console.log(!nbadulte || !nbbebe || !nbchambre || !datearrivee || !datedepart || !destinationId || !userId)
  // if (!nbadulte || !nbbebe || !nbchambre || !datearrivee || !datedepart || !destinationId || !userId) {
  //     return res.status(404).json({
  //         message: "tous les champs sont obligatoires !"
  //     })
  // }
  try {
    const reservations = await models.Reservation.create({
      nbadulte,
      nbbebe,
      nbchambre,
      datearrivee,
      datedepart,
      destinationId,
      userId,
    });
    res.status(201).json({
      message: "reservation prise en compte",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.getReservations = async (req, res) => {
  try {
    const reservations = await models.Reservation.findAll();
    res.status(201).json({
      reservations,
    });
  } catch (error) {
    res.status(404).json({
      error,
    });
  }
};
module.exports.getMyReservation = async (req, res) => {
  const { id } = req.params;

  try {
    const myreservation = await models.Reservation.findAll({
      where: {
        userId: id,
      },
    });
    res.status(201).json({
      myreservation,
    });
  } catch (error) {}
};
