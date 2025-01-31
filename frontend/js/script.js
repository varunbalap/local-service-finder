document.addEventListener('DOMContentLoaded', () => {
    const serviceButton = document.getElementById('viewServicesButton');
    const serviceList = document.getElementById('serviceList');
    
    serviceButton.addEventListener('click', async () => {
        try {
            const response = await fetch('http://localhost:5001/api/services');
            if (response.ok) {
                const services = await response.json();
                serviceList.innerHTML = ''; // Clear the current list
                services.forEach(service => {
                    const li = document.createElement('li');
                    li.textContent = `Service: ${service.name}, Available: ${service.available ? 'Yes' : 'No'}`;
                    serviceList.appendChild(li);
                });
            } else {
                console.error('Failed to fetch services');
            }
        } catch (error) {
            console.error('Error fetching services:', error);
        }
    });
});
