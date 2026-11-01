const db = require("../config/db");

const getAllProjects = (callback) => {
  const sql = `
    SELECT
      id,
      title,
      category,
      description,
      tech,
      demo_url,
      github_url,
      image,
      created_at
    FROM projects
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

const getProjectById = (id, callback) => {
  const sql = `
    SELECT
      id,
      title,
      category,
      description,
      tech,
      demo_url,
      github_url,
      image,
      created_at
    FROM projects
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

const createProject = (data, callback) => {
  const sql = `
    INSERT INTO projects
    (
      title,
      category,
      description,
      tech,
      demo_url,
      github_url,
      image
    )
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.title,
      data.category,
      data.description,
      data.tech,
      data.demo_url,
      data.github_url,
      data.image,
    ],
    callback
  );
};

const updateProject = (id, data, callback) => {
  const sql = `
    UPDATE projects
    SET
      title = ?,
      category = ?,
      description = ?,
      tech = ?,
      demo_url = ?,
      github_url = ?,
      image = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      data.title,
      data.category,
      data.description,
      data.tech,
      data.demo_url,
      data.github_url,
      data.image,
      id,
    ],
    callback
  );
};

const deleteProject = (id, callback) => {
  const sql = `
    DELETE FROM projects
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};