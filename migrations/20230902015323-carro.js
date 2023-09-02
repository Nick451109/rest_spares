'use strict';

/** @type {import('sequelize-cli').Migration} */

const carro = require('../models').carro;
module.exports = {
  async up (queryInterface, Sequelize) {
    await carro.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('carro');
  }
};
