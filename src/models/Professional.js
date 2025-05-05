const mongoose = require('mongoose');

const ProfessionalSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    nic: String,
    password: String,
    googleId: String,
    phone: String,
    type: String,
    address: String,
    dob : String,
    url: String,
    status: String,
    consultationFee: String,
    bankAccountDetails: {
        accountHolderName: { type: String },
        accountNumber: { type: String },
        bankName: { type: String },
        branchName: { type: String },
    },
    certifications: [String],
    rating: [{ clientEmail : String , clientName : String , rating : String , message : String , date : String }],
    averageRating: String
}, { timestamps: true });

const Professional = mongoose.model("Professional", ProfessionalSchema);

module.exports.Professional = Professional;
