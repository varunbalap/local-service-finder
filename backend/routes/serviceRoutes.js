const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Add a new service
router.post('/add', async (req, res) => {
    try {
        const { name, category, price, provider, availability } = req.body;
        const newService = new Service({ name, category, price, provider, availability });
        await newService.save();
        res.status(201).json({ message: 'Service added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error adding service' });
    }
});

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching services' });
    }
});

module.exports = router;
