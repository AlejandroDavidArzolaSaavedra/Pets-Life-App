export function fillReservationSection(section, reservations) {
    section.innerHTML = reservations.length === 0
        ? '<p>You have no reservations in this section.</p>'
        : reservations.map(reservation => `
            <div class="white-box bg-white">
                <strong>${reservation.daycareName}</strong><br>
                <strong>Arrival:</strong> ${reservation.checkIn}<br>
                <strong>Departure:</strong> ${reservation.checkOut}<br>
                <strong>Additional Options:</strong><br>
                ${reservation.additions.map(addition => ` - ${addition.description}`).join('<br>')}<br>
                <strong>Price:</strong> ${reservation.totalPrice}
            </div>
        `).join('');
}
