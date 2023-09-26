// les controlleurs en générales gerent la logique de l'application

const models = require("../../models")

module.exports.createUsers = async (req, res) => {


};
module.exports.getUsers = async (req, res) => {
    try {

        let users = await models.User.findAll();
        res.status(200).json({
            data: users
        })
    } catch (error) {
        console.log(error)
    }

};
module.exports.getUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await models.User.findOne({
            where: {
                id: id
            },
            includes: [
                {
                    model: models.Reservation,
                    as: 'reservations'
                }
            ]
        })
        res.status(201).json({
            user
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports.deleteUsers = async (req, res) => {

};

module.exports.putUsers = async (req, res) => {

}
