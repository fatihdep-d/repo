const express = require("express");

const {
  getCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} = require("../controllers/certificateController");

const router = express.Router();

router.get("/", getCertificates);
router.post("/", createCertificate);
router.put("/:id", updateCertificate);
router.delete("/:id", deleteCertificate);

module.exports = router;