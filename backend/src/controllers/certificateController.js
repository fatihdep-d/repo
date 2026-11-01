const certificateModel = require("../models/certificateModel");

const getCertificates = (req, res) => {
  certificateModel.getAllCertificates((err, results) => {
    if (err) {
      console.error("Get certificates error:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data certificates",
      });
    }

    res.json({
      success: true,
      data: results,
    });
  });
};

const createCertificate = (req, res) => {
  const {
    title,
    issuer,
    date,
    credential_id,
    verification_url,
  } = req.body;

  certificateModel.createCertificate(
    {
      title,
      issuer,
      date,
      credential_id,
      verification_url,
    },
    (err, result) => {
      if (err) {
        console.error("Create certificate error:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal menambahkan certificate",
        });
      }

      res.status(201).json({
        success: true,
        message: "Certificate berhasil ditambahkan",
        data: result,
      });
    }
  );
};

const updateCertificate = (req, res) => {
  const { id } = req.params;

  const {
    title,
    issuer,
    date,
    credential_id,
    verification_url,
  } = req.body;

  certificateModel.updateCertificate(
    id,
    {
      title,
      issuer,
      date,
      credential_id,
      verification_url,
    },
    (err, result) => {
      if (err) {
        console.error("Update certificate error:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal mengubah certificate",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Certificate tidak ditemukan",
        });
      }

      res.json({
        success: true,
        message: "Certificate berhasil diubah",
        data: result,
      });
    }
  );
};

const deleteCertificate = (req, res) => {
  const { id } = req.params;

  certificateModel.deleteCertificate(id, (err, result) => {
    if (err) {
      console.error("Delete certificate error:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal menghapus certificate",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Certificate tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Certificate berhasil dihapus",
      data: result,
    });
  });
};

module.exports = {
  getCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
};