const categoryModel = require("../models/categoryModel");
const itemModel = require("../models/itemModel");
const lostReportModel = require("../models/lostReportModel");

const showCreateForm = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();

    res.render("lost/create", {
      categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const createLostReport = async (req, res) => {
  try {
    const { name, description, categoryId, dateLost, location } = req.body;

    const userId = req.session.user.id;

    // Create the item first
    const item = await itemModel.createItem(categoryId, name, description);

    // Create the lost report
    await lostReportModel.createLostReport(
      item.insertId,
      userId,
      dateLost,
      location,
    );

    res.redirect("/my-lost-reports");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

const getMyLostReports = async (req, res) => {
  try {
    const userId = req.session.user.id;

    const reports = await lostReportModel.getLostReportsByUser(userId);

    res.render("lost/index", {
      reports,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong.");
  }
};

module.exports = {
  showCreateForm,
  createLostReport,
  getMyLostReports,
};
