'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('mantenimiento', [

      {
        "encargado":7,
        "repuesto": 3, 
        "servicio": "cambio de repuesto",
        "carro_idCarro":7
      },
      {
        "encargado":8, 
        "repuesto": 4, 
        "servicio": "cambio de repuesto",
        "carro_idCarro":8
      }
      
     ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('mantenimiento', null, {});
  }
};
