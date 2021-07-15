require("dotenv").config();
const logger = require("morgan");
const express = require("express");
const app = express();
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(express.static('public'))

const api_v1 = require("./apis/api_v1.0");

app.use("/api_v1.0", api_v1);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(`Server listening on http://${HOSTNAME}:${PORT}`);
  }
});