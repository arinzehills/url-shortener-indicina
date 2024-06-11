const express = require("express");
const router = express.Router();

router.post("/encode", async (req, res) => {
  res.sendStatus(200);
});
router.post("/decode", async (req, res) => {
  res.sendStatus(200);
});
router.get("/statistic/:urlPath", async (req, res) => {
  console.log(req.params);
  res.sendStatus(200);
});

module.exports = router;
