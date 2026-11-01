const {
  getAllMessages,
  createMessage,
  deleteMessage,
} = require("../models/messageModel");

const getMessages = (req, res) => {
  getAllMessages((err, results) => {
    if (err) {
      console.error("Gagal mengambil messages:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal mengambil pesan",
      });
    }

    res.json({
      success: true,
      data: results,
    });
  });
};

const sendMessage = (req, res) => {
  const {
    name,
    email,
    message,
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Nama, email, dan pesan wajib diisi",
    });
  }

  createMessage(
    {
      name,
      email,
      message,
    },
    (err, result) => {
      if (err) {
        console.error("Gagal menyimpan pesan:", err);

        return res.status(500).json({
          success: false,
          message: "Gagal menyimpan pesan",
        });
      }

      res.status(201).json({
        success: true,
        message: "Pesan berhasil dikirim",
        data: {
          id: result.insertId,
          name,
          email,
          message,
        },
      });
    }
  );
};

const removeMessage = (req, res) => {
  const { id } = req.params;

  deleteMessage(id, (err, result) => {
    if (err) {
      console.error("Gagal menghapus pesan:", err);

      return res.status(500).json({
        success: false,
        message: "Gagal menghapus pesan",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Pesan tidak ditemukan",
      });
    }

    res.json({
      success: true,
      message: "Pesan berhasil dihapus",
    });
  });
};

module.exports = {
  getMessages,
  sendMessage,
  deleteMessage: removeMessage,
};