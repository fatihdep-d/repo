const db = require("../config/db");

const getAllSkills = (callback) => {
  const sql = `
    SELECT
      skills.id,
      skills.name,
      skills.level,
      skills.percentage,
      skills.group_id,
      skill_groups.title AS group_title,
      skill_groups.icon AS group_icon
    FROM skills
    INNER JOIN skill_groups
      ON skills.group_id = skill_groups.id
    ORDER BY skill_groups.id, skills.id
  `;

  db.query(sql, callback);
};

const createSkill = (data, callback) => {
  const sql = `
    INSERT INTO skills
    (name, level, percentage, group_id)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.name,
      data.level,
      data.percentage,
      data.group_id,
    ],
    callback
  );
};

const updateSkill = (id, data, callback) => {
  const sql = `
    UPDATE skills
    SET
      name = ?,
      level = ?,
      percentage = ?,
      group_id = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      data.name,
      data.level,
      data.percentage,
      data.group_id,
      id,
    ],
    callback
  );
};

const deleteSkill = (id, callback) => {
  const sql = `
    DELETE FROM skills
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};