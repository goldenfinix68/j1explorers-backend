const { Op } = require("sequelize");
const db = require("../models");

const createNewTour = (tour) => db.tour.create({ ...tour });

const getAllTours = () => db.tour.findAll({ where: { deletedAt: null } });

const getTourById = (id) => db.tour.findByPk({ where: { id } });

const getTourByUserId = (userId, attributes = [], include = []) =>
  db.tour.findOne({
    attributes,
    where: {
      [Op.or]: {
        userId1: userId,
        userId2: userId,
        userId3: userId,
        userId4: userId,
      },
    },
    include,
  });
const updateTourById = (tour, id) => db.tour.update(tour, { where: { id } });

module.exports = {
  createNewTour,
  getAllTours,
  getTourById,
  getTourByUserId,
  updateTourById,
};
