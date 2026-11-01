const db = require("../config/db");

const getAllMessages = (callback) => {
  const sql = `
    SELECT
      id,
      name,
      email,
      message,
      created_at
    FROM contacts
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

const createMessage = (data, callback) => {
  const sql = `
    INSERT INTO contacts
    (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.name,
      data.email,
      data.message,
    ],
    callback
  );
};

const deleteMessage = (id, callback) => {
  const sql = `
    DELETE FROM contacts
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  getAllMessages,
  createMessage,
  deleteMessage,
};