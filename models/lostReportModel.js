const db = require("../config/database");

const createLostReport = async (itemId, userId, dateLost, location) => {
  const [result] = await db.execute(
    `INSERT INTO lost_reports
        (item_id, user_id, date_lost, location)
        VALUES (?, ?, ?, ?)`,
    [itemId, userId, dateLost, location],
  );

  return result;
};

const getLostReportsByUser = async (userId) => {
  const [rows] = await db.execute(
    `SELECT
            lost_reports.*,
            items.name AS item_name,
            items.description,
            categories.name AS category_name

         FROM lost_reports

         INNER JOIN items
            ON lost_reports.item_id = items.id

         INNER JOIN categories
            ON items.category_id = categories.id

         WHERE lost_reports.user_id = ?

         ORDER BY lost_reports.created_at DESC`,
    [userId],
  );

  return rows;
};

module.exports = {
  createLostReport,
  getLostReportsByUser,
};
