const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "0cbee336eefa483e91484195b2d4591c",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/index.html"));
});

rollbar.log("Hello world!");

const port = process.env.PORT || 5050;

app.listen(port, () => console.log(`Server listening on ${port}`));
