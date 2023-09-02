'use strict';

/** @type {import('sequelize-cli').Migration} */
const mantenimiento = require('../models').mantenimiento;

module.exports = {
  async up (queryInterface, Sequelize) {
    await mantenimiento.sync();

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('mantenimiento');
  }
};
