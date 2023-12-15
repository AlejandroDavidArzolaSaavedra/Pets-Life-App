export const updateSelectors = (selectedIndex, petSelectors) => {
    const selectedPetId = petSelectors[selectedIndex].value;
    for (let i = 0; i < petSelectors.length; i++) {
        if (i !== selectedIndex) {
            const selector = petSelectors[i];
            for (let j = 0; j < selector.options.length; j++) {
                if (selector.options[j].value === selectedPetId) {
                    selector.remove(j);
                    break;
                }
            }
        }
    }
}
