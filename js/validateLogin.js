const loadHeader = (user) => {
    loadComponents(user.admin ? "../html/components/headerAdminUser.html" : "../html/components/headerLoggedUser.html", "header");
};

document.addEventListener('DOMContentLoaded', function() {
    const userData = JSON.parse(localStorage.getItem('user_data'));
    userData ? loadHeader(userData) : loadComponents("../html/components/header.html", "header");
});

