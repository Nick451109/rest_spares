'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mantenimiento', [

      {
        "encargado":3,
        "repuesto": 1, 
        "servicio": "cambio de repuesto",
        "carro_idCarro":3
      },
      {
        "encargado":4, 
        "repuesto": 2, 
        "servicio": "cambio de repuesto",
        "carro_idCarro":4
      }
      
     ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mantenimiento', null, {});
  }
};
