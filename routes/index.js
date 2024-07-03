const express = require("express");

const router = express.Router();

const userRouter = require("./userRoute");
const testRouter = require("./testRoute");
const categoryRouter = require("./categoryRoute");

router.use("/user", userRouter);
router.use("/test", testRouter);
router.use("/category", categoryRouter);

module.exports = router;
