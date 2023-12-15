import { refreshDaycareServices } from "./refresh/refreshDaycareService.js";
import { refreshPetsSelector } from "./refresh/refreshPetsSelector.js";
import { timeButtonListener } from "./timeButtonListener.js";
import { checkOutDate } from "./date/checkOutDate.js";
import { checkInDate } from "./date/checkInDate.js";
import { calculateTotalPrice } from "./price/calculatePrice.js";

document.addEventListener('DOMContentLoaded', function() {
    try {
        const userData = JSON.parse(localStorage.getItem('user_data'));
        let selectedDaycare = JSON.parse(localStorage.getItem('selectedDaycare'));
        if (!userData || !selectedDaycare) {
            throw new Error('Not user found');
        }
        // Events form
        const formReservation = document.getElementById('form-reservation');
        formReservation.addEventListener('submit', function(event) {
            event.preventDefault();
            const selectedAnimals = petSelectors.filter(selector => selector.value !== '');
            if (selectedAnimals.length != 0) {
                window.location.href = './history.html';
            }
        });

        // Load pet and services inputs selectors
        const petSelectors = [
            document.getElementById('selector-pet-first'),
            document.getElementById('selector-pet-second'),
            document.getElementById('selector-pet-third')
        ];
        const serviceSelectors = [
            document.getElementById('selector-addition-first'),
            document.getElementById('selector-addition-second'),
            document.getElementById('selector-addition-third')
        ];

        const daycareLocation = document.getElementById('daycare-location');
        const daycarePrice = document.getElementById('daycare-price');
        const availability = document.getElementById('availability-reservation');

        // Load pets
        refreshPetsSelector(petSelectors, userData,serviceSelectors,daycarePrice);
        refreshDaycareServices(serviceSelectors,selectedDaycare,daycarePrice);

        // Add time listener
        timeButtonListener();

        // Select Date
        checkInDate(petSelectors, serviceSelectors);
        checkOutDate(petSelectors, serviceSelectors);
        // Update information and price
        daycareLocation.value = selectedDaycare.name && selectedDaycare.location ? selectedDaycare.name + " " + selectedDaycare.location : '';
        calculateTotalPrice(petSelectors, serviceSelectors);
        availability.textContent = 'Availability: Available';
    } catch (error) {
        console.error(error);
        window.location.href = 'error.html';
    }
});
