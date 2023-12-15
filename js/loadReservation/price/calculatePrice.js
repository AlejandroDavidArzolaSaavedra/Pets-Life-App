import { calculateAdditionalPrice } from "./calculateAdditionalPrice.js";

export const calculateTotalPrice = (petSelectors, serviceSelectors) => {
    let selectedDaycare = JSON.parse(localStorage.getItem('selectedDaycare'));
    let basePrice = parseFloat(selectedDaycare.pricePerDay) || 0;
    const selectedCount = petSelectors.filter(selector => selector.value !== '').length;
    let selectedPetCount = 0;
    let daycarePrice = document.getElementById('daycare-price');
    petSelectors.forEach(selector => {
        if (selector.value) {
            selectedPetCount++;
        }
        if (selectedCount > 0) {
            selector.removeAttribute('required');
        } else {
            selector.setAttribute('required', 'required');
        }
    });

    if (selectedDaycare.pricePerDay) {
        const priceWithoutFirstCharacter = selectedDaycare.pricePerDay.substring(1);
        const numericPrice = parseFloat(priceWithoutFirstCharacter);
        basePrice = numericPrice || 0;
    }

    const checkInDateInput = document.getElementById('datePickerCheckIn');
    const checkOutDateInput = document.getElementById('datePickerCheckOut');
    const checkInDate = new Date(checkInDateInput.value);
    const checkOutDate = new Date(checkOutDateInput.value);
    // Calculate the difference about check in and check out
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((checkOutDate - checkInDate) / oneDay);
    const additionalPrice = calculateAdditionalPrice();

    if (diffDays <= 0) {
        daycarePrice.value = '0.00€';
    } else {
        const totalPrice = (basePrice + additionalPrice) * selectedPetCount * diffDays;
        daycarePrice.value = totalPrice.toFixed(2) + '€';
    }
}
