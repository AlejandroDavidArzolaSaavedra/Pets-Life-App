document.addEventListener('DOMContentLoaded', function () {
    fetch('../assets/json/infoPage/ourServices.json')
        .then(response => response.json())
        .then(data => {
            const servicesBox = document.getElementById('services-box');
            const services = data.services;
            // Create service card container
            services.forEach(service => {
                const serviceCard = document.createElement('div');
                serviceCard.classList.add('service-card');

                const serviceIcon = document.createElement('div');
                serviceIcon.classList.add('service-icon');
                serviceIcon.innerHTML = `<i class="${service.icon}"></i>`;
                serviceCard.appendChild(serviceIcon);

                const serviceTitle = document.createElement('h3');
                serviceTitle.classList.add('service-title');
                serviceTitle.textContent = service.name;
                serviceCard.appendChild(serviceTitle);

                const serviceDescription = document.createElement('p');
                serviceDescription.classList.add('service-description');
                serviceDescription.textContent = service.description;
                serviceCard.appendChild(serviceDescription);

                servicesBox.appendChild(serviceCard);
            });
        })
        .catch(error => {
            console.error('Error loading or parsing the JSON file:', error);
            window.location.href = '../html/error.html';
        });
});
