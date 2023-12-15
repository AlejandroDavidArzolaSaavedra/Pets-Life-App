export function getCurrentUser() {
    const currentUserJson = localStorage.getItem('user_data');
    if (!currentUserJson) {
        throw new Error('User data not found in localStorage');
    }
    return JSON.parse(currentUserJson);
}
