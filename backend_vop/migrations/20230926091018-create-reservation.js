'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nbadulte: {
        type: Sequelize.INTEGER
      },
      nbbebe: {
        type: Sequelize.INTEGER
      },
      nbchambre: {
        type: Sequelize.INTEGER
      },
      datearrivee: {
        type: Sequelize.DATE
      },
      datedepart: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // userId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      // reservationId: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservations');
  }
};