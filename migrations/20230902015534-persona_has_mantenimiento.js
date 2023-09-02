'use strict';

/** @type {import('sequelize-cli').Migration} */
const persona_has_mantenimiento = require('../models').persona_has_mantenimiento;

module.exports = {
  async up (queryInterface, Sequelize) {
    await persona_has_mantenimiento.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('persona_has_mantenimiento');
  }
};
