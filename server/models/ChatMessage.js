const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  from: {
    type: String,
    enum: ["user", "bot"],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
