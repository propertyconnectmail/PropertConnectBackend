const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversationSchema);
