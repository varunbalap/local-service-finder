const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    provider: { type: String, required: true },
    availability: { type: String, required: true }
});

module.exports = mongoose.model('Service', serviceSchema);
