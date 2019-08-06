const router = require("express").Router();
const User = require("../models/User");
const { logValidation } = require("../validator/log");

router.get("/", (req, res) => {
  User.find()
    .sort({ email: 1 })
    .exec()
    .then(doc => {
      res.status(200).json({ data: doc });
    });
});

router.post("/register", (req, res) => {
     
});

module.exports = router;
