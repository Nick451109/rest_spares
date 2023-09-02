'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carro', [

      {
        "carro_idCarro": 1,
        "repuesto_idrepuesto": 1
      },
      {
        "carro_idCarro": 1,
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
