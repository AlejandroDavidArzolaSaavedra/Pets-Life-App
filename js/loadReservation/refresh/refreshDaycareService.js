import { calculateTotalPrice } from "../price/calculatePrice.js";
import { updateSelectorsServices } from "../updateSelectorInputs/updateSelectorService.js";

export const refreshDaycareServices =(serviceSelectors, selectedDaycare,daycarePrice) =>{
    const daycareServicesData = selectedDaycare ? selectedDaycare.services : [];
    
    if (selectedDaycare && daycareServicesData) {
        // Fill service selectors
        for (let i = 0; i < serviceSelectors.length; i++) {
            serviceSelectors[i].innerHTML = '<option value=""></option>';
            daycareServicesData.forEach(service => {
                const option = document.createElement('option');
                option.value = service;
                option.textContent = service;
                serviceSelectors[i].appendChild(option);
            });
    
            serviceSelectors[i].addEventListener('change', function() {
                calculateTotalPrice(serviceSelectors, selectedDaycare, daycarePrice);
                // Update selector -> avoid duplicates
                updateSelectorsServices(i, serviceSelectors);
            });    
        }
    }
}
