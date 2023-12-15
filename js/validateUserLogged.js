// If user is logged
document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('user_data')) {
        window.location.href = 'error.html';
    }
});
