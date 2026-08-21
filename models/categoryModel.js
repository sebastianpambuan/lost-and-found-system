const db = require("../config/database");

const getAllCategories = async () => {
  const [rows] = await db.execute("SELECT * FROM categories ORDER BY name ASC");

  return rows;
};

const getCategoryById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM categories WHERE id = ?", [
    id,
  ]);

  return rows[0];
};

const createCategory = async (name) => {
  const [result] = await db.execute(
    "INSERT INTO categories (name) VALUES (?)",
    [name],
  );

  return result;
};

const updateCategory = async (id, name) => {
  const [result] = await db.execute(
    "UPDATE categories SET name = ? WHERE id = ?",
    [name, id],
  );

  return result;
};

const deleteCategory = async (id) => {
  const [result] = await db.execute("DELETE FROM categories WHERE id = ?", [
    id,
  ]);

  return result;
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
