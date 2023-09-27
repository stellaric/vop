'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        through: 'Reservations',
        foreignKey: 'reservationId', // Clé étrangère dans la table intermédiaire faisant référence à Reservation
        as: 'reservation_users', // Alias pour accéder aux utilisateurs associés à une réservation
        otherKey: 'userId'
      });
      // this.belongsTo(models.Destination, {
      //   foreignKey: 'destinationId',
      //   as: 'destination',
      // });
    }
  }
  Reservation.init({
    nbadulte: DataTypes.INTEGER,
    nbbebe: DataTypes.INTEGER,
    nbchambre: DataTypes.INTEGER,
    datearrivee: DataTypes.DATE,
    datedepart: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};