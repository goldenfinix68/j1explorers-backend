const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const cors = require("cors");
const app = express();

const rootRouter = require("./routes");

const { accessLog } = require("./middleware");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", accessLog, rootRouter);

app.listen(config.PORT, "0.0.0.0", () => {
  console.log(`Listening at http://localhost:${config.PORT}`);
});
