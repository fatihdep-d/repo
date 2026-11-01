const projectModel = require("../models/projectModel");

const getProjects = (req, res) => {
  projectModel.getAllProjects((err, results) => {
    if (err) {
      console.error("Get projects error:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data projects",
      });
    }

    const projects = results.map((project) => ({
      ...project,
      tech:
        typeof project.tech === "string"
          ? JSON.parse(project.tech)
          : project.tech || [],
    }));

    res.json({
      success: true,
      data: projects,
    });
  });
};

const getProject = (req, res) => {
  const { id } = req.params;

  projectModel.getProjectById(id, (err, results) => {
    if (err) {
      console.error("Get project error:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal mengambil project",
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Project tidak ditemukan",
      });
    }

    const project = {
      ...results[0],
      tech:
        typeof results[0].tech === "string"
          ? JSON.parse(results[0].tech)
          : results[0].tech || [],
    };

    res.json({
      success: true,
      data: project,
    });
  });
};

const createProject = (req, res) => {
  const {
    title,
    category,
    description,
    tech,
    demo_url,
    github_url,
    image,
  } = req.body;

  let techData = tech;

  if (Array.isArray(tech)) {
    techData = JSON.stringify(tech);
  }

  projectModel.createProject(
    {
      title,
      category,
      description,
      tech: techData,
      demo_url,
      github_url,
      image,
    },
    (err, result) => {
      if (err) {
        console.error("Create project error:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal menambahkan project",
        });
      }

      res.status(201).json({
        success: true,
        message: "Project berhasil ditambahkan",
        data: result,
      });
    }
  );
};

const updateProject = (req, res) => {
  const { id } = req.params;

  const {
    title,
    category,
    description,
    tech,
    demo_url,
    github_url,
    image,
  } = req.body;

  let techData = tech;

  if (Array.isArray(tech)) {
    techData = JSON.stringify(tech);
  }

  projectModel.updateProject(
    id,
    {
      title,
      category,
      description,
      tech: techData,
      demo_url,
      github_url,
      image,
    },
    (err, result) => {
      if (err) {
        console.error("Update project error:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal mengubah project",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Project tidak ditemukan",
        });
      }

      res.json({
        success: true,
        message: "Project berhasil diubah",
        data: result,
      });
    }
  );
};

const deleteProject = (req, res) => {
  const { id } = req.params;

  projectModel.deleteProject(id, (err, result) => {
    if (err) {
      console.error("Delete project error:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal menghapus project",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Project tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Project berhasil dihapus",
      data: result,
    });
  });
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};