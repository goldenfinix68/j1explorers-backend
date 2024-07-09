"use strict";
const { Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.tour, { as: "tour1", foreignKey: "userId1" });
      User.hasOne(models.tour, { as: "tour2", foreignKey: "userId2" });
      User.hasOne(models.tour, { as: "tour3", foreignKey: "userId3" });
      User.hasOne(models.tour, { as: "tour4", foreignKey: "userId4" });
    }

    async comparePassword(plainPassword) {
      return bcrypt.compare(plainPassword, this.password);
    }

    static async encryptPassword(plainPassword) {
      const salt = await bcrypt.genSalt(10);

      return bcrypt.hash(plainPassword, salt);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      gender: {
        type: DataTypes.STRING,
      },
      birthdate: {
        type: DataTypes.DATE,
      },
      phone: {
        type: DataTypes.STRING,
      },
      whatsapp: {
        type: DataTypes.STRING,
      },
      employer: {
        type: DataTypes.STRING,
      },
      passport_country: {
        type: DataTypes.STRING,
      },
      birthcity: {
        type: DataTypes.STRING,
      },
      passport_number: {
        type: DataTypes.STRING,
      },
      expiration_date: {
        type: DataTypes.DATE,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "user",
      paranoid: true,
      timestamps: true,
    }
  );

  User.beforeCreate(async (user) => {
    const id = uuidv4();
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);

    user.set({ id, password, salt });
    return user;
  });

  return User;
};
