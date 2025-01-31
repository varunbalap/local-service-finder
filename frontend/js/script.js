// script.js

document.addEventListener("DOMContentLoaded", function() {
    const serviceList = [
        { name: "John's Plumbing", service: "Plumbing", location: "Downtown", contact: "123-456-7890" },
        { name: "Quick Electricians", service: "Electrical", location: "Uptown", contact: "987-654-3210" },
        { name: "Super Fixers", service: "Home Repair", location: "Midtown", contact: "555-123-4567" },
    ];

    const serviceListSection = document.getElementById("service-list");

    serviceList.forEach(provider => {
        const serviceCard = document.createElement("div");
        serviceCard.classList.add("service-card");

        serviceCard.innerHTML = `
            <h3>${provider.name}</h3>
            <p><strong>Service:</strong> ${provider.service}</p>
            <p><strong>Location:</strong> ${provider.location}</p>
            <p><strong>Contact:</strong> ${provider.contact}</p>
        `;

        serviceListSection.appendChild(serviceCard);
    });
});
