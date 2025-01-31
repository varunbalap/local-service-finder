const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://imxvb:dHSdafz0MCN4QWBj@cluster0.mongodb.net/Local-Service", {
   useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Error connecting to MongoDB:", err));

// Service schema and model
const serviceSchema = new mongoose.Schema({
   name: String,
   description: String,
   availability: String,
   contact: String,
});

const Service = mongoose.model('Service', serviceSchema);

// Routes

// Get all services
app.get('/api/services', async (req, res) => {
   try {
      const services = await Service.find();
      res.json(services);
   } catch (err) {
      res.status(400).send("Error fetching services");
   }
});

// Add a new service
app.post('/api/services', async (req, res) => {
   const { name, description, availability, contact } = req.body;

   const newService = new Service({
      name,
      description,
      availability,
      contact,
   });

   try {
      await newService.save();
      res.status(201).send("Service added successfully");
   } catch (err) {
      res.status(400).send("Error adding service");
   }
});

// Start the server
app.listen(port, () => {
   console.log(`Server running on port ${port}`);
});
