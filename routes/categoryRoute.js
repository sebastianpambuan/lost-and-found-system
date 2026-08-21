const express = require("express");

const router = express.Router();

const categoryController = require("../controllers/categoryController");
const { requireRole } = require("../middleware/roleMiddleware");

router.get(
  "/admin/categories",
  requireRole("admin"),
  categoryController.getCategories,
);

router.get(
  "/admin/categories/create",
  requireRole("admin"),
  categoryController.showCreateForm,
);

router.post(
  "/admin/categories",
  requireRole("admin"),
  categoryController.createCategory,
);

router.get(
  "/admin/categories/:id/edit",
  requireRole("admin"),
  categoryController.showEditForm,
);

router.post(
  "/admin/categories/:id/edit",
  requireRole("admin"),
  categoryController.updateCategory,
);

router.post(
  "/admin/categories/:id/delete",
  requireRole("admin"),
  categoryController.deleteCategory,
);

module.exports = router;
