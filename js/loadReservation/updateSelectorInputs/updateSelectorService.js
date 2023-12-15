export const updateSelectorsServices = (selectedIndex, serviceSelectors) => {
    const selectedService = serviceSelectors[selectedIndex].value;
    for (let i = 0; i < serviceSelectors.length; i++) {
        if (i !== selectedIndex) {
            const selector = serviceSelectors[i];
            for (let j = 0; j < selector.options.length; j++) {
                if (selector.options[j].value === selectedService) {
                    selector.remove(j);
                    break;
                }
            }
        }
    }
}
