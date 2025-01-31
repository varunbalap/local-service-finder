document.addEventListener("DOMContentLoaded", function() {
    const serviceList = document.getElementById("services-list");
    if (serviceList) {
        fetch("http://localhost:5001/api/services")
            .then(response => response.json())
            .then(data => {
                serviceList.innerHTML = data.map(service => `
                    <div class="service-item">
                        <h3>${service.name} (${service.category})</h3>
                        <p>Provider: ${service.provider}</p>
                        <p>Price: $${service.price}</p>
                        <p>Availability: ${service.availability}</p>
                    </div>
                `).join("");
            });
    }

    const addServiceForm = document.getElementById("add-service-form");
    if (addServiceForm) {
        addServiceForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const newService = {
                name: document.getElementById("name").value,
                category: document.getElementById("category").value,
                price: document.getElementById("price").value,
                provider: document.getElementById("provider").value,
                availability: document.getElementById("availability").value
            };

            fetch("http://localhost:5001/api/services/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newService)
            }).then(() => window.location.href = "services.html");
        });
    }
});
