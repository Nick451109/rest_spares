'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('persona', [
      {
        "nombre":"Nick",
        "apellido":"Arevalo"
      },
      {
        "nombre": "Andres",
        "apellido": "Borbor"
      },
      {
        "nombre": "Alex",
        "apellido": "Alvear"
      },
      {
        "nombre": "Mario",
        "apellido": "Funichi"
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('persona', null, {});
  }
};
