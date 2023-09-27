'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Destination,{
        foreignKey:'destinationId',
        as:'destination'
      })
    }
  }
  Vol.init({
    numerovol: DataTypes.STRING,
    compagnieaerienne: DataTypes.STRING,
    aeroportdepart: DataTypes.STRING,
    aeroport: DataTypes.STRING,
    aeroportarrivee: DataTypes.STRING,
    dateheuredepart: DataTypes.DATE,
    dateheurearrivee: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Vol',
  });
  return Vol;
};