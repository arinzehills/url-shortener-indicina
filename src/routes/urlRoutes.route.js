const express = require("express");
const UrlController = require("../controllers/UrlController");
const router = express.Router();

router.post("/encode", UrlController.encode);
// router.post('/decode', UrlController.decode);
// router.get('/statistic/:urlPath', UrlController.getStatistic);

module.exports = router;
