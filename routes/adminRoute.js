const express = require("express");

const router = express.Router();

const adminController = require("../controllers/adminController");
const { requireRole } = require("../middleware/roleMiddleware");

router.get(
  "/admin/dashboard",
  requireRole("admin"),
  adminController.showDashboard,
);

module.exports = router;
