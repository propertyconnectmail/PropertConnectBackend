const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
  receiptUrl: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Receipt', receiptSchema);

// const mongoose = require('mongoose');

// const receiptSchema = new mongoose.Schema({
//     payment: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
//     amount: { type: Number, required: true },
//     receiptUrl: { type: String, required: true }, // Link to the generated PDF receipt
//     issueDate: { type: Date, default: Date.now }
// }, { timestamps: true });

// module.exports = mongoose.model('Receipt', receiptSchema);
