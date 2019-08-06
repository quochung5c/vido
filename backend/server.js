const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

mongoose.connect(
  "mongodb+srv://quochung5c:quochung5c@cluster0-4veva.gcp.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (err) throw err;
    console.log("Connect to database");
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
