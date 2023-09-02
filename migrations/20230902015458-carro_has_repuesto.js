'use strict';

/** @type {import('sequelize-cli').Migration} */
const carro_has_repuesto = require('../models').carro_has_repuesto;

module.exports = {
  async up (queryInterface, Sequelize) {
    await carro_has_repuesto.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carro_has_repuesto');

  }
};
