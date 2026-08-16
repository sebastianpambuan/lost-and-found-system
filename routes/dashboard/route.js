const express = require("express");

const router = express.Router();

const controller = require("../../controllers/dashboard/controller");
const { requireAuth } = require("../../middleware/authMiddleware");

router.get("/dashboard", requireAuth, controller.showDashboard);

router.get("/dashboard", controller.showDashboard);

module.exports = router;
