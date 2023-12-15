export function addConfirmDeleteButtonListener() {
    // Confirm button event
    const confirmDeleteButton = document.getElementById('confirmDeleteButton');
    confirmDeleteButton.addEventListener('click', function() {
    const deletIdElement = document.getElementById('deleteIdEvent');
    const idToDelete = deletIdElement.textContent;

    const rows = document.querySelectorAll('#table-administration tbody tr');
    let rowToDelete = null;
    var idDelete = null;
    // Delete in both tables
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells[0].textContent === idToDelete) { 
            rowToDelete = row;
            idDelete = cells[0].textContent;
        }
    });

    if (rowToDelete) {
        rowToDelete.remove();
        const backdrops = document.querySelectorAll('.modal-backdrop');
        const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');
        let rowToDeleteMobile = null;

        rowsMobile.forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells[0].textContent === idDelete) { 
                rowToDeleteMobile = row;
            }
        });

        if (rowToDeleteMobile) {
            rowToDeleteMobile.remove();
        }

        backdrops.forEach(backdrop => {
            backdrop.remove();
        });

        const modal = document.getElementById('confirmDeleteModal');
        modal.classList.remove('show');
    }
  });
}
