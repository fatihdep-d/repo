const express = require("express");

const {
  getMessages,
  sendMessage,
  deleteMessage,
} = require("../controllers/messageController");

const router = express.Router();

router.get("/", getMessages);
router.post("/", sendMessage);
router.delete("/:id", deleteMessage);

module.exports = router;