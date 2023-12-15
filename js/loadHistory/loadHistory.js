import { fetchReservationsData, filterReservations } from './dataService.js';
import { fillReservationSection } from './reservationSection.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        // Verify if user is logged
        const userData = localStorage.getItem('user_data');
        if (!userData) {
            window.location.href = '../html/permissionDenied.html';
        }

        const reservationsData = await fetchReservationsData();
        const currentDate = new Date();

        // Loading pending and past Reservations
        const pendingReservations = filterReservations(reservationsData.reservations, reservation => new Date(reservation.checkOut) >= currentDate);
        const pastReservations = filterReservations(reservationsData.reservations, reservation => new Date(reservation.checkOut) < currentDate);

        const leftSection = document.querySelector('.left-section .white-box');
        const rightSection = document.querySelector('.right-section .white-box');

        // Fill content of the page
        fillReservationSection(leftSection, pendingReservations);
        fillReservationSection(rightSection, pastReservations);
    } catch (error) {
        // If user not found
        console.error('Error:', error);
        window.location.href = '../html/error.html';
    }
});
