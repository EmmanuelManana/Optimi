const express = require("express");
const router = express.Router();
const data = require("../data/data");


router.use(logger);

router.get("/", (req, res) => {
  let systems = data.filter((system) => system.name === "User Agents");
  res.json(systems)
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
