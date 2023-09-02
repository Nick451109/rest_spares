'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('persona_has_mantenimiento', [

      {
        "persona_idpersona": 3,
        "mantenimiento_idmantenimiento": 3
      },
      {
        "persona_idpersona": 4,
        "mantenimiento_idmantenimiento": 4
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
