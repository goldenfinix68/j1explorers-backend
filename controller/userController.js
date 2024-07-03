const userService = require("../service/userService");
const catchSync = require("../utils/catchSync");

const getAll = catchSync(async (req, res) => {
  const users = await userService.getAllUsers();

  res.json({ data: users });
});

const add = catchSync(async (req, res) => {
  console.log(req.body);
  const user = await userService.createNewUser(req.body);

  res.json({ data: user });
});

module.exports = {
  getAll,
  add,
};
