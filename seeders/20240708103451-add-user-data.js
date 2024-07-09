"use strict";
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const { userId } = require("../consts/seedData");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash("password", salt);

    const userData = [
      {
        id: userId,
        username: "admin",
        email: "admin@outlook.com",
        fullname: "John Sanderson",
        password,
      },
    ];
    await queryInterface.bulkInsert("users", [...userData]);
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
