'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Destination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Vol, {
        foreignKey: 'destinationId', // Clé étrangère dans la table Vol
        as: 'vols', // Alias pour accéder aux vols associés
      });

      // Relation One-to-Many entre Destination et Hotel
      this.hasMany(models.Hotel, {
        foreignKey: 'destinationId', // Clé étrangère dans la table Hotel
        as: 'hotels', // Alias pour accéder aux hôtels associés
      });
      // Relation "one-to-many" entre Destination et Reservation
    this.hasMany(models.Reservation, {
      foreignKey: 'destinationId', // Clé étrangère dans la table de réservation
      as: 'reservations', // Alias pour accéder aux réservations associées à une destination
    });
    }
  }
  Destination.init({
    namedestination: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Destination',
  });
  return Destination;
};