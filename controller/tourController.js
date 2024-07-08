const tourService = require("../service/tourService");
const catchSync = require("../utils/catchSync");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const db = require("../models");
const { tourAttributes } = require("../consts");
const { scheduleDetail } = require("../consts/scheduleAttributes");

const getAll = catchSync(async (req, res) => {
  const tours = await tourService.getAllTours();

  res.json({ tours });
});

const addNewTour = catchSync(async (req, res) => {
  const tour = await tourService.createNewTour(req.body);

  res.json({ tour });
});

const updateTour = catchSync(async (req, res) => {
  const tour = req.body;

  await tourService.updateTourById(tour, req.params.id);

  res.json({ success: "ok" });
});

const getPackMembersByUserId = catchSync(async (req, res) => {
  const tour = await tourService.getTourByUserId(
    req.user.id,
    [],
    tourAttributes.packMembers
  );

  res.json({ ...tour.dataValues });
});

const getTourByUserId = catchSync(async (req, res) => {
  const tour = await tourService.getTourByUserId(
    req.user.id,
    tourAttributes.tourDetail
  );

  res.json({ ...tour.dataValues });
});

const getTourWithSchedulesByUserId = catchSync(async (req, res) => {
  const tour = await tourService.getTourByUserId(
    req.user.id,
    tourAttributes.tourDetail,
    [{ model: db.schedule, as: "schedules", attributes: [...scheduleDetail] }]
  );

  res.json({ ...tour.dataValues });
});

module.exports = {
  getAll,
  addNewTour,
  updateTour,
  getPackMembersByUserId,
  getTourByUserId,
  getTourWithSchedulesByUserId,
};
