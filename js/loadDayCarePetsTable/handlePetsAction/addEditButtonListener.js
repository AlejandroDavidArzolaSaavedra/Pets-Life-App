export function addEditButtonListener(daycarePets) {
    const editButtons = document.querySelectorAll('.operation-button[aria-label="edit"]');
    editButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        alert("Comming soon.... in Sprint 3")
      });
    });
  }