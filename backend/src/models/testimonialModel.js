const db = require("../config/db");

const getAllTestimonials = (callback) => {
  const sql = `
    SELECT
      id,
      name,
      role,
      company,
      avatar,
      stars,
      quote,
      created_at
    FROM testimonials
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

const createTestimonial = (data, callback) => {
  const sql = `
    INSERT INTO testimonials
    (
      name,
      role,
      company,
      avatar,
      stars,
      quote
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.name,
      data.role,
      data.company,
      data.avatar,
      data.stars,
      data.quote,
    ],
    callback
  );
};

const updateTestimonial = (id, data, callback) => {
  const sql = `
    UPDATE testimonials
    SET
      name = ?,
      role = ?,
      company = ?,
      avatar = ?,
      stars = ?,
      quote = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      data.name,
      data.role,
      data.company,
      data.avatar,
      data.stars,
      data.quote,
      id,
    ],
    callback
  );
};

const deleteTestimonial = (id, callback) => {
  const sql = `
    DELETE FROM testimonials
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
};