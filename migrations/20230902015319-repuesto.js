'use strict';

/** @type {import('sequelize-cli').Migration} */
const repuesto = require('../models').repuesto;

module.exports = {
  async up (queryInterface, Sequelize) {
    await repuesto.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('repuesto');
  }
};
