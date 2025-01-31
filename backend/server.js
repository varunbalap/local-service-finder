const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(bodyParser.json());

let services = [
    { name: "John Doe", service: "Plumbing", location: "Chennai", contact: "9876543210" },
    { name: "Jane Smith", service: "Electrical", location: "Bangalore", contact: "8765432109" }
];

app.get("/services", (req, res) => {
    res.json(services);
});

app.post("/services", (req, res) => {
    const newService = req.body;
    services.push(newService);
    res.status(201).json(newService);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
