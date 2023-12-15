let users = [];

export async function fetchUserData() {
  if (users.length === 0) {
    const response = await fetch('../assets/json/users.json');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const data = await response.json();
    users = data.users;
  }
  return { users };
}
