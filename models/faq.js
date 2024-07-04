"use strict";
const { Model } = require("sequelize");
const category = require("./category");
module.exports = (sequelize, DataTypes) => {
  class faq extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      faq.belongsTo(models.category, { foreignKey: "categoryId" });
    }
  }
  faq.init(
    {
      categoryId: {
        type: DataTypes.STRING,
        references: {
          model: "category",
          key: "id",
        },
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "faq",
      paranoid: true,
      timestamps: true,
    }
  );
  return faq;
};
