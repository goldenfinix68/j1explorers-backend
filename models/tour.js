"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tour.belongsTo(models.user, { as: "user1", foreignKey: "userId1" });
      tour.belongsTo(models.user, { as: "user2", foreignKey: "userId2" });
      tour.belongsTo(models.user, { as: "user3", foreignKey: "userId3" });
      tour.belongsTo(models.user, { as: "user4", foreignKey: "userId4" });

      tour.hasMany(models.schedule, { foreignKey: "tourId", as: "schedules" });
    }
  }
  tour.init(
    {
      book: DataTypes.DATE,
      main_tour_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      addition_tour_name: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      addition_tour_date: DataTypes.DATE,
      addition_tour_book: DataTypes.DATE,
      addition_tour_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      addition_days_type: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      addition_days_book: DataTypes.DATE,
      addition_days_price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      paid: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      userId1: {
        type: DataTypes.STRING,
        references: {
          model: "user",
          key: "id",
        },
      },
      userId2: {
        type: DataTypes.STRING,
        references: {
          model: "user",
          key: "id",
        },
      },
      userId3: {
        type: DataTypes.STRING,
        references: {
          model: "user",
          key: "id",
        },
      },
      userId4: {
        type: DataTypes.STRING,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "tour",
      timestamps: true,
      paranoid: true,
    }
  );
  return tour;
};
