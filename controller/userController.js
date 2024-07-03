const userService = require("../service/userService");
const catchSync = require("../utils/catchSync");

const getAll = catchSync(async () => {
  const users = await userService.getAllUsers();

  res.json({ data: users });
});

const add = catchSync(async (userObj) => {
  const user = await userService.createNewUser(userObj);

  return user;
});

module.exports = {
  getAll,
  add,
};
