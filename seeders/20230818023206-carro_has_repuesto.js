'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carro_has_repuesto', [

      {
        "carro_idCarro": 3,
        "repuesto_idrepuesto": 1
      },
      {
        "carro_idCarro": 4,
        "repuesto_idrepuesto": 2
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
