export function addDeleteButtonListener() {  
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const username = button.getAttribute('data-username');
            const deleteUserNameElement = document.getElementById('deleteUserName');
            deleteUserNameElement.textContent = username;

            const idEvent = button.getAttribute('data-id');
            const deleteiDNameElement = document.getElementById('deleteIdEvent');
            deleteiDNameElement.textContent = idEvent; 
            deleteiDNameElement.style.display ="none";
            // Delete modal open
            const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
            modal.show();
        });
    });
}

