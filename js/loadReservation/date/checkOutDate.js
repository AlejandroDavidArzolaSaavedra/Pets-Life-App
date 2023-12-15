import { calculateTotalPrice } from "../price/calculatePrice.js";

export const checkOutDate = (petSelectors, serviceSelectors) => {
    const today = new Date();
    const checkOutDateInput = document.getElementById('datePickerCheckOut');
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (!localStorage.getItem('checkOutDate')) {
        checkOutDateInput.valueAsDate = tomorrow;
    }

    checkOutDateInput.addEventListener('change', function() {
        calculateTotalPrice(petSelectors, serviceSelectors);
    });
}
