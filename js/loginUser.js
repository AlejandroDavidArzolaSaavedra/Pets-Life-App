
function loginUser(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Loading JSON user data
    fetch("../assets/json/users.json")
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.email === email);
            if (user) {
                // Verify if user exist and password
                if (user.password === password) {
                    const userData = {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        password: user.password,
                        photo: user.photo,
                        reservations: user.reservations,
                        admin: user.admin,
                    };

                    // Load and add pets data
                    fetch("../assets/json/pets.json")
                        .then(response => response.json())
                        .then(petsData => {
                            const userPets = petsData.pets.filter(pet => pet.idOwner === userData.name);
                            userData.pets = userPets;

                            // Save user data with pets in localStorage
                            localStorage.setItem('user_data', JSON.stringify(userData));
                            loadHeader(user);
                            window.location.href = "initpage.html";
                        })
                        .catch(error => {
                            console.error("Error loading pets JSON:", error);
                        });
                } else {
                    // Password incorrect
                    if(password.length > 0){
                        alert("Password is incorrect. Please try again.");
                    }
                }
            } else {
                // Usser not found
                console.log(password)
                alert("User not found. Please check your email or sign up.");
            }
        })
        .catch(error => {
            console.error("Error loading users JSON:", error);
        });
}