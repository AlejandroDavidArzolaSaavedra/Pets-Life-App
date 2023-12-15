export function addDeleteButtonListener() {  
    const deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const username = button.getAttribute('data-username');
            const deleteUserNameElement = document.getElementById('deleteUserName');
            deleteUserNameElement.textContent = username;
            // Open modal to verify the user to delete
            const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
            modal.show();
        });
    });
}