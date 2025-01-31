require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const serviceRoutes = require('./routes/serviceRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/services', serviceRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
