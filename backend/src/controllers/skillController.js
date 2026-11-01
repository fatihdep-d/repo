// src/controllers/skillController.js

// Mendapatkan semua skill
const getSkills = async (req, res) => {
  try {
    // 13+ data skill lengkap
    const skills = [
      { id: 1, group_title: "Frontend Development", name: "HTML / CSS", level: "Advanced" },
      { id: 2, group_title: "Frontend Development", name: "JavaScript", level: "Advanced" },
      { id: 3, group_title: "Frontend Development", name: "React.js", level: "Intermediate" },
      { id: 4, group_title: "Frontend Development", name: "Next.js", level: "Intermediate" },
      { id: 5, group_title: "Frontend Development", name: "Tailwind CSS", level: "Advanced" },
      { id: 6, group_title: "Backend Development", name: "Node.js", level: "Intermediate" },
      { id: 7, group_title: "Backend Development", name: "Express.js", level: "Intermediate" },
      { id: 8, group_title: "Backend Development", name: "PHP / Laravel", level: "Intermediate" },
      { id: 9, group_title: "Database", name: "MySQL", level: "Advanced" },
      { id: 10, group_title: "Database", name: "phpMyAdmin", level: "Advanced" },
      { id: 11, group_title: "Tools & Version Control", name: "Git & GitHub", level: "Intermediate" },
      { id: 12, group_title: "Tools & Version Control", name: "Terminal / CLI", level: "Intermediate" },
      { id: 13, group_title: "Tools & Version Control", name: "macOS Environment", level: "Advanced" }
    ];

    res.status(200).json({
      success: true,
      data: skills, // 👈 Kunci utama agar frontend tidak error forEach
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Membuat skill baru
const createSkill = async (req, res) => {
  try {
    res.status(201).json({ message: "Skill berhasil dibuat" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Memperbarui skill berdasarkan ID
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Skill dengan ID ${id} berhasil diperbarui` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Menghapus skill berdasarkan ID
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json({ message: `Skill dengan ID ${id} berhasil dihapus` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Ekspor fungsi controller
module.exports = {
  getSkills,
  createSkill,
  updateSkill,
  deleteSkill,
};