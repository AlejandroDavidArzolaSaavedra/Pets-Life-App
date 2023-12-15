export function addConfirmDeleteButtonListener() {
    // Implement logic to confirm and delete the user
    const confirmDeleteButton = document.getElementById('confirmDeleteButton');
    confirmDeleteButton.addEventListener('click', function() {
    const deleteUserNameElement = document.getElementById('deleteUserName');
    const usernameToDelete = deleteUserNameElement.textContent;
    const rows = document.querySelectorAll('#table-administration tbody tr');
    let rowToDelete = null;
    var emailDelete = null;

    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells[1].textContent === usernameToDelete) {
        rowToDelete = row;
        emailDelete = cells[3].textContent;
      }
    });
    if (rowToDelete) {
      rowToDelete.remove();
      const backdrops = document.querySelectorAll('.modal-backdrop');
      const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');
      let rowToDeleteMobile = null;

      rowsMobile.forEach(row => {
        const cells = row.querySelectorAll('td');
        console.log(emailDelete);
        if (cells[0].textContent === emailDelete) {
          rowToDeleteMobile = row;
        }
      });

      if (rowToDeleteMobile) {
        rowToDeleteMobile.remove();
      }

      backdrops.forEach(backdrop => {
        backdrop.remove();
      });
      // Hide the modal
      const modal = document.getElementById('confirmDeleteModal');
      modal.classList.remove('show');
    }
  });
}
