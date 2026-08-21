const db = require("../config/database");

const createItem = async (categoryId, name, description) => {
  const [result] = await db.execute(
    `INSERT INTO items
        (category_id, name, description)
        VALUES (?, ?, ?)`,
    [categoryId, name, description],
  );

  return result;
};

const getItemById = async (id) => {
  const [rows] = await db.execute(
    `SELECT *
         FROM items
         WHERE id = ?`,
    [id],
  );

  return rows[0];
};

module.exports = {
  createItem,
  getItemById,
};
