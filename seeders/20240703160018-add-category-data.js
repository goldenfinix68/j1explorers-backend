"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const categories = [
      {
        title: "Accommodations",
      },
      {
        title: "Roommates (pack)",
      },
      {
        title: "Payments",
      },
      {
        title: "Cancellation policy",
      },
      {
        title: "Luggage",
      },
      {
        title: "Flights",
      },
      {
        title: "Hotels",
      },
      {
        title: "Tours",
      },
    ];
    await queryInterface.bulkInsert("categories", categories);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
