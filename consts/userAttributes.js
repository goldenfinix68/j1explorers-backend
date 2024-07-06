const db = require("../models");

const userEssential = ["id", "fullname", "email"];
const userDetail = [
  "gender",
  "birthdate",
  "phone",
  "whatsapp",
  "employer",
  "passport_country",
  "birthcity",
  "passport_number",
  "expiration_date",
];
const userPrivacy = ["password"];
const tours = [
  {
    model: db.tour,
    as: "tour1",
    include: [
      { model: db.user, as: "user1", attributes: [...userEssential] },
      { model: db.user, as: "user2", attributes: [...userEssential] },
      { model: db.user, as: "user3", attributes: [...userEssential] },
      { model: db.user, as: "user4", attributes: [...userEssential] },
    ],
  },
  {
    model: db.tour,
    as: "tour2",
    include: [
      { model: db.user, as: "user1", attributes: [...userEssential] },
      { model: db.user, as: "user2", attributes: [...userEssential] },
      { model: db.user, as: "user3", attributes: [...userEssential] },
      { model: db.user, as: "user4", attributes: [...userEssential] },
    ],
  },
  {
    model: db.tour,
    as: "tour3",
    include: [
      { model: db.user, as: "user1", attributes: [...userEssential] },
      { model: db.user, as: "user2", attributes: [...userEssential] },
      { model: db.user, as: "user3", attributes: [...userEssential] },
      { model: db.user, as: "user4", attributes: [...userEssential] },
    ],
  },
  {
    model: db.tour,
    as: "tour4",
    include: [
      { model: db.user, as: "user1", attributes: [...userEssential] },
      { model: db.user, as: "user2", attributes: [...userEssential] },
      { model: db.user, as: "user3", attributes: [...userEssential] },
      { model: db.user, as: "user4", attributes: [...userEssential] },
    ],
  },
];

module.exports = {
  userEssential,
  userDetail,
  userPrivacy,
  tours,
};
