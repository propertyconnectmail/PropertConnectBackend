const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  professional: { type: mongoose.Schema.Types.ObjectId, ref: 'Professional', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  zoomLink: { type: String },
  status: { type: String, enum: ['pending', 'completed', 'cancelled', 'rescheduled'], default: 'pending' },
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment' },
  clientReview: {
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String }
  }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
