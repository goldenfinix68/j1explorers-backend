const scheduleService = require("../service/scheduleService");
const catchSync = require("../utils/catchSync");
const { scheduleAttributes } = require("../consts");

const getScheduleById = catchSync(async (req, res) => {
  const schedule = await scheduleService.getScheduleById(req.query.id, [
    ...scheduleAttributes.scheduleDetail,
  ]);

  res.json(schedule);
});

module.exports = {
  getScheduleById,
};
