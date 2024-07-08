"use strict";

const schedule = require("../models/schedule");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("schedules", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      from: {
        type: Sequelize.INTEGER,
      },
      to: {
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      day: {
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      time: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      tourId: {
        type: Sequelize.INTEGER,
        references: {
          model: "tours",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("schedules");
  },
};
