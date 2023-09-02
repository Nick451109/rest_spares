'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carro', [

      {
        "encargado":3,
        "repuesto": 1, 
        "servicio": "cambio de repuesto",
        "carro_idCarro":1
      },
      {
        "encargado":4, 
        "repuesto": 2, 
        "servicio": "cambio de repuesto",
        "carro_idCarro":1
      }
      
     ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mantenimiento', null, {});
  }
};
