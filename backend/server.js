const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const serviceRoutes = require('./routes/serviceRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://imxvb:dHSdafz0MCN4QWBj@local-service.y0wv5.mongodb.net/Local-Service", {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Database connection error:', error);
});

// Routes
app.use('/api/services', serviceRoutes);

app.listen(5001, () => {
    console.log('Server running on port 5001');
});
