const Message = require("../model/messages");

const getAllMessages = async (req, res) => {
  let messages;

  try {
    messages = await Message.find();
  } catch (error) {
    console.log(error);
  }

  if (!messages) {
    return res.status(404).json({ message: "No users found!" });
  }

  return res.status(200).json({ messages });
};

const addMessage = async (req, res) => {
  const { timestamp, from_userId, to_userId, message } = req.body;

  let sms;

  try {
    sms = new Message({
      timestamp,
      from_userId,
      to_userId,
      message,
    });
    await sms.save();
  } catch (error) {
    console.log(error);
  }

  if (!sms) {
    return res.status(500).json({ message: "Unable to add message" });
  }

  return res.status(201).json({ sms });
};

exports.getAllMessages = getAllMessages;
exports.addMessage = addMessage;
