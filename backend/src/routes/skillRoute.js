// src/routes/skillRoute.js
const express = require("express");

const {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");

const router = express.Router();

router.get("/", getSkills);
router.post("/", createSkill);
router.put("/:id", updateSkill);
router.delete("/:id", deleteSkill);

// PASTIKAN BARIS INI ADA DI PALING BAWAH
module.exports = router;