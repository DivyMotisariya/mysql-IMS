require("dotenv").config();
const express = require("express");
const app = express();
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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