const db = require("../config/db");

const getAllCertificates = (callback) => {
  const sql = `
    SELECT
      id,
      title,
      issuer,
      date,
      credential_id,
      verification_url,
      created_at
    FROM certificates
    ORDER BY id DESC
  `;

  db.query(sql, callback);
};

const createCertificate = (data, callback) => {
  const sql = `
    INSERT INTO certificates
    (
      title,
      issuer,
      date,
      credential_id,
      verification_url
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      data.title,
      data.issuer,
      data.date,
      data.credential_id,
      data.verification_url,
    ],
    callback
  );
};

const updateCertificate = (id, data, callback) => {
  const sql = `
    UPDATE certificates
    SET
      title = ?,
      issuer = ?,
      date = ?,
      credential_id = ?,
      verification_url = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [
      data.title,
      data.issuer,
      data.date,
      data.credential_id,
      data.verification_url,
      id,
    ],
    callback
  );
};

const deleteCertificate = (id, callback) => {
  const sql = `
    DELETE FROM certificates
    WHERE id = ?
  `;

  db.query(sql, [id], callback);
};

module.exports = {
  getAllCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
};