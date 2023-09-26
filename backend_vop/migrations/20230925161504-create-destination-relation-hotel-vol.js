'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addColumn('Vols', 'destinationId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Destinations',
        key: 'id', // L'attribut de clé primaire de la table Destination
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
    queryInterface.addColumn('Hotels', 'destinationId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Destinations',
        key: 'id', // L'attribut de clé primaire de la table Destination
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
