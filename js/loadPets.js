document.addEventListener('DOMContentLoaded', function() {

    const userDataJSON = localStorage.getItem('user_data');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);

        if (userData && userData.pets) {
            const petsContainer = document.getElementById('pets-container');
            
            userData.pets.forEach((pet, index) => {
                const petDiv = document.createElement('div');
                petDiv.innerHTML = `
                    <div class="col" id="pet-${index}">
                        <div class="photos-pet">
                            <a href="editPet.html"><img src="${pet.photo}" alt="foto-animal" class="rounded-circle"></a>
                            <h2 class="animal-name">${pet.name}</h2>
                        </div>
                    </div>
                `;
                
                petDiv.addEventListener('click', function() {
                    localStorage.setItem('selectedPet', JSON.stringify(pet));
                    window.location.href = 'editPet.html';
                });
                petsContainer.appendChild(petDiv);
            });
        }
    }
});
