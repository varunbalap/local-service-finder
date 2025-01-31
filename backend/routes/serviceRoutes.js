const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// Fetch all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services' });
    }
});

// Add new service
router.post('/', async (req, res) => {
    try {
        const { name, description, provider } = req.body;
        const service = new Service({
            name,
            description,
            provider,
            available: true
        });
        await service.save();
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: 'Error adding service' });
    }
});

module.exports = router;
