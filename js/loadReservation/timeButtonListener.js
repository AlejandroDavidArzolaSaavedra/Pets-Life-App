export const timeButtonListener =() => {
    const timeButtons = document.querySelectorAll('.time-box input[type="radio"]');
    timeButtons.forEach(button => {
        button.addEventListener('change', function() {
            timeButtons.forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.checked = false;
                }
            });
        });
    });
}