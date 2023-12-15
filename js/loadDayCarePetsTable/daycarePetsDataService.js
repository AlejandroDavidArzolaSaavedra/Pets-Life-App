let daycarePets = [];

export async function fetchReservationData() {
  if (daycarePets.length === 0) {
    const response = await fetch('../assets/json/reservations.json');
    if (!response.ok) {
      throw new Error('Failed to fetch reservations data');
    }
    const data = await response.json();
    daycarePets = data.reservations;
  }
  return { daycarePets };
}
