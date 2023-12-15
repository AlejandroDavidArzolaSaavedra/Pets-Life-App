const logOut = () => {
    localStorage.removeItem('user_data');
    window.location.href = "index.html";
};