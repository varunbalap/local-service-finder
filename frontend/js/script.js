document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5001/services")
        .then(response => response.json())
        .then(data => {
            const serviceList = document.getElementById("service-list");
            data.forEach(service => {
                const div = document.createElement("div");
                div.classList.add("service-item");
                div.innerHTML = `<strong>${service.service}</strong> - ${service.name} (${service.location}) - Contact: ${service.contact}`;
                serviceList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching services:", error));
});

// Handle form submission
document.getElementById("service-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const newService = {
        name: document.getElementById("name").value,
        service: document.getElementById("service").value,
        location: document.getElementById("location").value,
        contact: document.getElementById("contact").value
    };

    fetch("http://localhost:5001/services", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newService)
    })
    .then(response => response.json())
    .then(data => {
        alert("Service added successfully!");
        document.getElementById("service-form").reset();
        location.reload();
    })
    .catch(error => console.error("Error adding service:", error));
});
