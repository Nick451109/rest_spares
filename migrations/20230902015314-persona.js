'use strict';

/** @type {import('sequelize-cli').Migration} */
const persona = require('../models').persona;

module.exports = {
  async up (queryInterface, Sequelize) {
    await persona.sync();
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('persona');
  }
};
