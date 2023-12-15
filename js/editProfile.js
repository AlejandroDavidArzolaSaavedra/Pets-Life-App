document.addEventListener('DOMContentLoaded', function () {
    try {
        const userDataJSON = localStorage.getItem('user_data');
        const isAdmin = userDataJSON ? JSON.parse(userDataJSON).admin : false;

        const nameInput = document.getElementById('lname');
        const lastNameInput = document.getElementById('lapellido');
        const emailInput = document.getElementById('lcorreo');
        const passwordInput = document.getElementById('llpass');
        const photoInput = document.getElementById('lphoto');
        if (isAdmin) {
            const selectedUserJSON = localStorage.getItem('user_selected_by_admin');
            if (selectedUserJSON) {
                const selectedUser = JSON.parse(selectedUserJSON);
                nameInput.value = selectedUser.name || '';
                lastNameInput.value = selectedUser.surname || '';
                emailInput.value = selectedUser.email || '';
                passwordInput.value = "********";
                photoInput.value = selectedUser.photo.split('/').pop();
            } else {
                if (userDataJSON) {
                    const userData = JSON.parse(userDataJSON);
                    nameInput.value = userData.name || '';
                    lastNameInput.value = userData.surname || '';
                    emailInput.value = userData.email || '';
                    passwordInput.value = "********";
                    photoInput.value = userData.photo.split('/').pop();
                } else {
                    window.location.href = 'error.html';
                }
            }
        } else {
            if (userDataJSON) {
                const userData = JSON.parse(userDataJSON);
                nameInput.value = userData.name || '';
                lastNameInput.value = userData.surname || '';
                emailInput.value = userData.email || '';
                passwordInput.value = "********";
                photoInput.value = userData.photo.split('/').pop();
            } else {
                window.location.href = 'error.html';
            }
        }

        const cancelButton = document.getElementById('cancel-button');
        const saveChangesButton = document.getElementById('log');

        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();
            const userDataJSON = localStorage.getItem('user_data');
            const isAdmin = userDataJSON ? JSON.parse(userDataJSON).admin : false;

            if (isAdmin && !localStorage.getItem('user_selected_by_admin')) {
                window.location.href = 'profile.html';
            } else {
                window.location.href = 'adminUsers.html';
            }
            localStorage.removeItem('user_selected_by_admin');
        });

        saveChangesButton.addEventListener('click', function (e) {
            e.preventDefault(); 
            const userDataJSON = localStorage.getItem('user_data');
            const isAdmin = userDataJSON ? JSON.parse(userDataJSON).admin : false;

            if (isAdmin && !localStorage.getItem('user_selected_by_admin')) {
                window.location.href = 'profile.html';
            } else {
                window.location.href = 'adminUsers.html';
            }
            localStorage.removeItem('user_selected_by_admin');
        });

    } catch (error) {
        console.error('Error:', error);
        window.location.href = '../html/error.html';
    }
});
