const categoryModel = require("../models/categoryModel");

const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();

    res.render("admin/categories/index", {
      categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const showCreateForm = (req, res) => {
  res.render("admin/categories/create");
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    await categoryModel.createCategory(name);

    res.redirect("/admin/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const showEditForm = async (req, res) => {
  try {
    const category = await categoryModel.getCategoryById(req.params.id);

    if (!category) {
      return res.status(404).send("Category not found.");
    }

    res.render("admin/categories/edit", {
      category,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    await categoryModel.updateCategory(req.params.id, name);

    res.redirect("/admin/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const deleteCategory = async (req, res) => {
  try {
    await categoryModel.deleteCategory(req.params.id);

    res.redirect("/admin/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

module.exports = {
  getCategories,
  showCreateForm,
  createCategory,
  showEditForm,
  updateCategory,
  deleteCategory,
};
