"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      book: {
        type: Sequelize.DATE,
      },
      main_tour_price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      type: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      addition_tour_name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: "",
      },
      addition_tour_date: {
        type: Sequelize.DATE,
      },
      addition_tour_book: {
        type: Sequelize.DATE,
      },
      addition_tour_price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      addition_days_type: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      addition_days_book: {
        type: Sequelize.DATE,
      },
      addition_days_price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      paid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      userId1: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      userId2: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      userId3: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      userId4: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "users",
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
    await queryInterface.dropTable("tours");
  },
};
