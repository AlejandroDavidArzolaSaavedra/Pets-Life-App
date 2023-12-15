import { calculateTotalPrice } from "../price/calculatePrice.js";
import { updateSelectors } from "../updateSelectorInputs/updateSelector.js";

export const refreshPetsSelector = (petSelectors, userData,daycarePrice) => {
    let selectedDaycare = JSON.parse(localStorage.getItem('selectedDaycare'));
    const userPets = userData.pets || [];
    for (let i = 0; i < petSelectors.length; i++) {
        // Fill service selectors
        petSelectors[i].innerHTML = '<option value=""></option>';
        userPets.forEach(pet => {
            const option = document.createElement('option');
            option.value = pet.id;
            option.textContent = pet.name;
            petSelectors[i].appendChild(option);
        });

        petSelectors[i].addEventListener('change', function() {
            calculateTotalPrice(petSelectors, selectedDaycare, daycarePrice);
            // Update selector -> avoid duplicates
            updateSelectors(i, petSelectors);
        });
    }
}