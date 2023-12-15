document.addEventListener('DOMContentLoaded', function () {
    // Load json daycare Pets
    fetch('../assets/json/dayCare.json')
        .then(response => response.json())
        .then(data => {
            const daycareList = document.getElementById('daycare-list');
            const daycares = data.daycare;

            daycares.forEach((daycare,index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${daycare.name} - ${daycare.location}`;

                listItem.addEventListener('click', () => {
                    showDaycareInfo(daycare);
                    localStorage.setItem('selectedDaycare', JSON.stringify(daycare));
                });
                if (index === 0) {
                    localStorage.setItem('selectedDaycare', JSON.stringify(daycare));
                }
                daycareList.appendChild(listItem);
            });

            if (daycares.length > 0) {
                showDaycareInfo(daycares[0]);
            }
        })
        .catch(error => {
            console.error('Error cargando el archivo JSON:', error);
            window.location.href = '../html/error.html';
        });

    // Show the info of each daycare Pet
    function showDaycareInfo(daycare) {
        // Update information
        document.getElementById('daycare-name').textContent = `${daycare.name} - ${daycare.location}`;
        document.getElementById('daycare-description').textContent = daycare.description;
        document.getElementById('daycare-services').innerHTML = daycare.services.map(service => `<li>${service}</li>`).join('');
        document.getElementById('daycare-price').textContent = `Price Per Day: ${daycare.pricePerDay}`;
        document.getElementById('daycare-other-info').textContent = daycare.otherInformation;

        const reviewsContainer = document.getElementById('daycare-reviews');
        reviewsContainer.innerHTML = ''; 

        // Update reviews
        daycare.reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <img src="${review.photoUserMessage}" alt="User Photo" class="image-user"/>
                <h4 class="user-name">${review.nameUserMessage}</h4>
                <p class="user-text">${review.message}</p>
            `;
            reviewsContainer.appendChild(reviewElement);
        });
    }
});