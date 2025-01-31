const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    available: { type: Boolean, default: true },
    provider: { type: String, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);
