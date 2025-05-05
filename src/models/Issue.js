const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  raisedByType: { type: String, enum: ['client', 'professional'], required: true },
  raisedBy: { type: mongoose.Schema.Types.ObjectId, required: true },
  subject: { type: String, required: true },
  description: { type: String, required: true },
  proofDocuments: [{ type: String }],
  status: { type: String, enum: ['pending', 'resolved', 'closed'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Issue', issueSchema);
