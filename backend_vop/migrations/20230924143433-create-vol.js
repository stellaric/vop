'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numerovol: {
        type: Sequelize.STRING
      },
      compagnieaerienne: {
        type: Sequelize.STRING
      },
      aeroportdepart: {
        type: Sequelize.STRING
      },
      aeroport: {
        type: Sequelize.STRING
      },
      aeroportarrivee: {
        type: Sequelize.STRING
      },
      dateheuredepart: {
        type: Sequelize.DATE
      },
      dateheurearrivee: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vols');
  }
};