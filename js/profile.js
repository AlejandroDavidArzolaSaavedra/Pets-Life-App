document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name-input');
    const lastNameInput = document.getElementById('last-name-input');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    const pets = document.getElementById('pets');
    const reservations = document.getElementById('reservations');
    const profilePhoto = document.getElementById('foto-perfil-profile');

    try {
        const userData = JSON.parse(localStorage.getItem('user_data'));

        if (userData) {
            nameInput.value = userData.name;
            lastNameInput.value = userData.surname;
            emailInput.value = userData.email;
            passwordInput.value = "********"; 

            if (Array.isArray(userData.pets)) {
                pets.textContent = userData.pets.length;
            } else {
                pets.textContent = '0';
            }
            reservations.textContent = userData.reservations;

            if (userData.photo) {
                profilePhoto.src = userData.photo;
            }
        } else {
            // Error user not exist
            window.location.href = "error.html";
        }
    } catch (error) {
        // Handle Local storage parsing error
        console.error("Error parsing user data:", error);
        window.location.href = "error.html";
    }
});
