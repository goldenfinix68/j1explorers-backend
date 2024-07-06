const express = require("express");

const router = express.Router();

const userRouter = require("./userRoute");
const testRouter = require("./testRoute");
const categoryRouter = require("./categoryRoute");
const faqRouter = require("./faqRoute");
const tourRouter = require("./tourRoute");

router.use("/user", userRouter);
router.use("/test", testRouter);
router.use("/category", categoryRouter);
router.use("/faq", faqRouter);
router.use("/tour", tourRouter);

module.exports = router;
