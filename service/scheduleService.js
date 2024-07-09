const db = require("../models");

const getScheduleById = (id, attributes = [], include = []) =>
  db.schedule.findOne({
    attributes,
    where: { id },
    include,
  });

module.exports = {
  getScheduleById,
};
