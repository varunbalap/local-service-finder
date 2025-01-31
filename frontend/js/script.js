document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('serviceForm');
    const viewServicesBtn = document.getElementById('viewServicesBtn');
    const servicesContainer = document.getElementById('servicesContainer');
 
    // Handle the form submission to add a new service
    form.addEventListener("submit", (e) => {
       e.preventDefault();
 
       const formData = new FormData(form);
       const serviceData = {
          name: formData.get('name'),
          description: formData.get('description'),
          availability: formData.get('availability'),
          contact: formData.get('contact')
       };
 
       // Post the data to the backend
       fetch('http://localhost:5000/api/services', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(serviceData)
       })
       .then(response => response.json())
       .then(data => {
          alert("Service added successfully!");
          form.reset(); // Clear the form fields
       })
       .catch(error => {
          console.error('Error adding service:', error);
          alert('Error adding service!');
       });
    });
 
    // Fetch and display available services when the button is clicked
    viewServicesBtn.addEventListener('click', () => {
       fetch('http://localhost:5000/api/services')
          .then(response => response.json())
          .then(services => {
             // Clear any previous services
             servicesContainer.innerHTML = '';
 
             if (services.length === 0) {
                servicesContainer.innerHTML = '<p>No services available.</p>';
             } else {
                // Display the list of services
                services.forEach(service => {
                   const serviceElement = document.createElement('div');
                   serviceElement.classList.add('service');
                   serviceElement.innerHTML = `
                      <h3>${service.name}</h3>
                      <p><strong>Description:</strong> ${service.description}</p>
                      <p><strong>Availability:</strong> ${service.availability}</p>
                      <p><strong>Contact Info:</strong> ${service.contact}</p>
                   `;
                   servicesContainer.appendChild(serviceElement);
                });
             }
          })
          .catch(error => {
             console.error('Error fetching services:', error);
             alert('Error fetching services!');
          });
    });
 });
 