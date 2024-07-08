const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bio: { type: String },
    avatar: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);