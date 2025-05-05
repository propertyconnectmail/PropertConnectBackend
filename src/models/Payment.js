const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String },
  transactionId: { type: String },
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['paid', 'refunded'], default: 'paid' }
}, { timestamps: true });

module.exports = mongoose.model('Payment', paymentSchema);
