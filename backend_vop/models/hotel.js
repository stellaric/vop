'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Relation avec Destination
      Hotel.belongsTo(models.Destination, {
        foreignKey: 'destinationId', // Clé étrangère dans la table Hotel
        as: 'destination', // Alias pour accéder à la destination associée
      });
    }
  }
  Hotel.init({
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacite: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tarifnuit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    equipement: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagepath: {
      type: DataTypes.STRING, // Type de données pour le nom de l'image
      allowNull: true, // Si vous autorisez la valeur NULL (si l'image n'est pas requise)
    },
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};