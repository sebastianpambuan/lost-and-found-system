const express = require("express");

const router = express.Router();

const lostReportController = require("../controllers/lostReportController");

const { requireAuth } = require("../middleware/authMiddleware");

router.get("/report/lost", requireAuth, lostReportController.showCreateForm);

router.post("/report/lost", requireAuth, lostReportController.createLostReport);

router.get(
  "/my-lost-reports",
  requireAuth,
  lostReportController.getMyLostReports,
);

module.exports = router;
