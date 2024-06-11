const express = require("express");
const UrlController = require("../controllers/UrlController");
const ValidationMiddleware = require("../middlewares/ValidationMiddleware");
const router = express.Router();

router.post("/encode", ValidationMiddleware.validateUrl, UrlController.encode);
// router.post('/decode', UrlController.decode);
// router.get('/statistic/:urlPath', UrlController.getStatistic);

module.exports = router;
