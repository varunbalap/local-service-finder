// server.js

const express = require("express");
const cors = require("cors");

const app = express();

// Use CORS to allow frontend to make requests
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Define a simple route for testing
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// Define an endpoint to get available services
app.get("/services", (req, res) => {
    const services = [
        { name: "John's Plumbing", service: "Plumbing", location: "Downtown", contact: "123-456-7890" },
        { name: "Quick Electricians", service: "Electrical", location: "Uptown", contact: "987-654-3210" },
        { name: "Super Fixers", service: "Home Repair", location: "Midtown", contact: "555-123-4567" },
    ];
    res.json(services);
});

// Set the port for the server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
