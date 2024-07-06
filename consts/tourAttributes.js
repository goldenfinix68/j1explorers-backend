const db = require("../models");
const { userEssential } = require("./userAttributes");

const tourDetail = [
  "id",
  "book",
  "main_tour_price",
  "type",
  "addition_tour_name",
  "addition_tour_date",
  "addition_tour_book",
  "addition_tour_price",
  "addition_days_type",
  "addition_days_book",
  "addition_days_price",
  "paid",
  "userId1",
  "userId2",
  "userId3",
  "userId4",
];

const packMembers = [
  { model: db.user, as: "user1", attributes: [...userEssential] },
  { model: db.user, as: "user2", attributes: [...userEssential] },
  { model: db.user, as: "user3", attributes: [...userEssential] },
  { model: db.user, as: "user4", attributes: [...userEssential] },
];

module.exports = {
  tourDetail,
  packMembers,
};
