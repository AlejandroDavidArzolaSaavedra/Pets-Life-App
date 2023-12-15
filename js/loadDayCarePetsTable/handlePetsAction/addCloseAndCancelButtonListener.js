export function addCloseAndCancelButtonListener() {
    const closeButton = document.querySelector('.modal-header .close');
    const cancelButton = document.querySelector('.modal-footer button[data-dismiss="modal"]');
 
    const closeModal = function() {
        const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
        modal.hide();
    };
    closeButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
}