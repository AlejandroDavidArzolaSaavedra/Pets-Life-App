import { loadUsersTable } from './userTable.js';

document.addEventListener('DOMContentLoaded', function() {
    try {
        const currentUserJson = localStorage.getItem('user_data');
        const currentUser = JSON.parse(currentUserJson);
        if (!currentUser.admin) {
            console.error('Error user is not admin:');
            window.location.href = '../html/permissionDenied.html';
        }
    } catch (error) {
        console.error('Error to obtain the  User:', error);
        window.location.href = '../html/error.html';
    }
    // Loading the users
    loadUsersTable();
});
