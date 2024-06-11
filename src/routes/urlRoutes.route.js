const express = require("express");
const UrlController = require("../controllers/UrlController");
const router = express.Router();

router.post("/encode", async (req, res) => {});
router.post("/decode", async (req, res) => {});
router.get("/statistic/:urlPath", async (req, res) => {});

module.exports = router;
