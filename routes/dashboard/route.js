const express = require("express");

const router = express.Router();

const controller = require("../../controllers/dashboard/controller");

router.get("/dashboard", controller.showDashboard);

module.exports = router;
