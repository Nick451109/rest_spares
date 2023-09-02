'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carro_has_repuesto', [

      {
        "carro_idCarro": 7,
        "repuesto_idrepuesto": 3
      },
      {
        "carro_idCarro": 8,
        "repuesto_idrepuesto": 4
      }
  
     ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
