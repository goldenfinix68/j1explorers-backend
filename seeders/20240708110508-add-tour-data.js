"use strict";

const { DatabaseError } = require("sequelize");
const { userId } = require("../consts/seedData");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tourData = [
      {
        id: 1,
        book: new Date("2004-09-01"),
        main_tour_price: 1000,
        type: true,
        addition_tour_name: "Grand Canyon/Hoover Dam",
        addition_tour_date: new Date("2004-09-05"),
        addition_tour_book: new Date("2004-09-01"),
        addition_tour_price: 100,
        addition_days_type: 1,
        addition_days_book: new Date("2004-09-01"),
        addition_days_price: 100,
        paid: 1000,
        userId1: userId,
      },
    ];

    await queryInterface.bulkInsert("tours", [...tourData]);
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
