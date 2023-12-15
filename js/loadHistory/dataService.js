export async function fetchReservationsData() {
    const response = await fetch('../assets/json/reservations.json');
    if (!response.ok) {
        throw new Error('Failed to fetch reservations data');
    }
    return response.json();
}

export function filterReservations(reservations, filterFunction) {
    return reservations.filter(filterFunction);
}
