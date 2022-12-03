const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  content: String,
  from: Object
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message
