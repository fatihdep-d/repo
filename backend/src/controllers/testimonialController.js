const {
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../models/testimonialModel");

const getTestimonials = (req, res) => {
  getAllTestimonials((err, results) => {
    if (err) {
      console.error("Gagal mengambil testimonials:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal mengambil testimonials",
      });
    }

    res.json({
      success: true,
      data: results,
    });
  });
};

const createTestimonialController = (req, res) => {
  const {
    name,
    role,
    company,
    avatar,
    stars,
    quote,
  } = req.body;

  if (!name || !role || !quote) {
    return res.status(400).json({
      success: false,
      message: "Name, role, dan quote wajib diisi",
    });
  }

  createTestimonial(
    {
      name,
      role,
      company: company || "",
      avatar: avatar || "",
      stars: Number(stars) || 5,
      quote,
    },
    (err, result) => {
      if (err) {
        console.error("Gagal menambahkan testimonial:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal menambahkan testimonial",
        });
      }

      res.status(201).json({
        success: true,
        message: "Testimonial berhasil ditambahkan",
        data: {
          id: result.insertId,
        },
      });
    }
  );
};

const updateTestimonialController = (req, res) => {
  const { id } = req.params;

  const {
    name,
    role,
    company,
    avatar,
    stars,
    quote,
  } = req.body;

  if (!name || !role || !quote) {
    return res.status(400).json({
      success: false,
      message: "Name, role, dan quote wajib diisi",
    });
  }

  updateTestimonial(
    id,
    {
      name,
      role,
      company: company || "",
      avatar: avatar || "",
      stars: Number(stars) || 5,
      quote,
    },
    (err, result) => {
      if (err) {
        console.error("Gagal mengubah testimonial:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal mengubah testimonial",
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Testimonial tidak ditemukan",
        });
      }

      res.json({
        success: true,
        message: "Testimonial berhasil diubah",
      });
    }
  );
};

const deleteTestimonialController = (req, res) => {
  const { id } = req.params;

  deleteTestimonial(id, (err, result) => {
    if (err) {
      console.error("Gagal menghapus testimonial:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal menghapus testimonial",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Testimonial tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Testimonial berhasil dihapus",
    });
  });
};

module.exports = {
  getTestimonials,
  createTestimonial: createTestimonialController,
  updateTestimonial: updateTestimonialController,
  deleteTestimonial: deleteTestimonialController,
};