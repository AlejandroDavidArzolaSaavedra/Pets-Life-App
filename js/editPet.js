document.addEventListener('DOMContentLoaded', function() {
    const petDataJSON = localStorage.getItem('selectedPet');
    
    if (petDataJSON) {
        const petData = JSON.parse(petDataJSON);
        
        const nameInput = document.getElementById('lname');
        const weightInput = document.getElementById('lweight');
        const photoInput = document.getElementById('lphoto');
        const typeInput = document.getElementById('ltypepet');
        const breedInput = document.getElementById('lbreed');
        
        nameInput.value = petData.name;
        weightInput.value = petData.weight;
        
        const photoFileName = petData.photo.split('/').pop();
        photoInput.value = photoFileName;
        typeInput.value = petData.typeOfPet;
        breedInput.value = petData.breed;
    } else {
        console.log('Pet data not found');
    }

    const cancelButton = document.getElementById('cancel-button');
    const saveButton = document.getElementById('save-button');

    cancelButton.addEventListener('click', function() {
        localStorage.removeItem('selectedPet'); 
        window.location.href = 'mypets.html'; 
    });

    saveButton.addEventListener('click', function() {
        localStorage.removeItem('selectedPet'); 
        window.location.href = 'mypets.html';
    });
});
