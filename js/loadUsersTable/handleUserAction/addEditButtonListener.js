export function addEditButtonListener(users) {
    const editButtons = document.querySelectorAll('.operation-button[aria-label="edit"]');
    editButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        const userEmail = event.currentTarget.getAttribute('data-email');
        const selectedUser = users.find(user => user.email === userEmail); 
        if (selectedUser) {
          localStorage.setItem('user_selected_by_admin', JSON.stringify(selectedUser));
          window.location.href = '../html/editProfile.html';
        } else {
          console.error('User not found');
        }
      });
    });
  }