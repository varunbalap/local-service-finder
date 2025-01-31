document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:5001/services")  // Fetch data from backend
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            const serviceList = document.getElementById("service-list");
            serviceList.innerHTML = "";  // Clear previous content

            data.forEach(service => {
                const div = document.createElement("div");
                div.className = "service-item";
                div.innerHTML = `
                    <h3>${service.name}</h3>
                    <p><strong>Service:</strong> ${service.service}</p>
                    <p><strong>Location:</strong> ${service.location}</p>
                    <p><strong>Contact:</strong> ${service.contact}</p>
                `;
                serviceList.appendChild(div);
            });
        })
        .catch(error => console.error("Error fetching services:", error));
});
