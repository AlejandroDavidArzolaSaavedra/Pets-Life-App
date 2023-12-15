import { calculateTotalPrice } from "../price/calculatePrice.js";

export const checkInDate = (petSelectors, serviceSelectors) => {
    const checkInDateInput = document.getElementById('datePickerCheckIn');
    const today = new Date();

    if (!localStorage.getItem('checkInDate')) {
        checkInDateInput.valueAsDate = today;
    }
    
    checkInDateInput.addEventListener('change', function() {
        calculateTotalPrice(petSelectors, serviceSelectors);
    });
}