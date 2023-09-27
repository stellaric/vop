'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Reservations', 'destinationId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Destinations', // Le nom de la table Destination
        key: 'id', // La colonne à laquelle la clé étrangère fait référence (id)
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }); 

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Reservations');
  }
};
