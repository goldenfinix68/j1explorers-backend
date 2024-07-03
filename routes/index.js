const express = require("express");
const userRouter = require("./userRoute");
const testRouter = require("./testRoute");

const router = express.Router();

router.use("/user", userRouter);
router.use("/test", testRouter);

module.exports = router;
