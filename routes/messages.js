const express = require("express");
const router = express.Router();
const messagesController = require("../controllers/messages");

router.get("/", messagesController.getAllMessages);
router.post("/", messagesController.addMessage);

module.exports = router;
