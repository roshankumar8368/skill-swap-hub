const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skillName: { type: String, required: true, trim: true },
  charges: { type: Number, required: true },
  experience: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true, trim: true },
  description: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

skillSchema.index({ skillName: 'text', location: 'text' });

module.exports = mongoose.model('Skill', skillSchema);