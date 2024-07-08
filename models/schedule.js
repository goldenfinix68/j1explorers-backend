"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      schedule.belongsTo(models.tour, { foreignKey: "tourId", as: "tour" });
    }
  }
  schedule.init(
    {
      title: DataTypes.STRING,
      from: DataTypes.INTEGER,
      to: DataTypes.INTEGER,
      content: DataTypes.STRING,
      type: DataTypes.STRING,
      day: DataTypes.INTEGER,
      time: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      tourId: {
        type: DataTypes.INTEGER,
        references: {
          model: "tour",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "schedule",
      paranoid: true,
      timestamps: true,
    }
  );
  return schedule;
};
