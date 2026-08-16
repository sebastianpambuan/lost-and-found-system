const express = require("express");

const router = express.Router();

const controller = require("../../controllers/dashboard/controller");
const { requireAuth } = require("../../middleware/authMiddleware");

router.get("/dashboard/view", requireAuth, controller.showDashboard);

router.get("/dashboard/view", controller.showDashboard);

module.exports = router;
