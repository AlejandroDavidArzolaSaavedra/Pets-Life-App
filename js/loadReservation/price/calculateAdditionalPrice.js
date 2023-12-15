export const calculateAdditionalPrice = () => {
    let additionalPrice = 0;
    let serviceSelectors = [
        document.getElementById('selector-addition-first'),
        document.getElementById('selector-addition-second'),
        document.getElementById('selector-addition-third')
    ];
    serviceSelectors.forEach(selector => {
        if (selector.value) {
            if (selector.value !== "") {
                const randomPrice = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
                additionalPrice += randomPrice;
            }
        }
    });
    return additionalPrice;
}
