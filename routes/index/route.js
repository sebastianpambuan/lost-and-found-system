const express = require("express");

const router = express.Router();

const controller = require("../../controllers/index/controller");

router.get("/", controller.home);

module.exports = router;
