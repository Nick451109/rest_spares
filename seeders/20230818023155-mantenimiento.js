'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carro', [

      {}
  
     ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mantenimiento', null, {});
  }
};
