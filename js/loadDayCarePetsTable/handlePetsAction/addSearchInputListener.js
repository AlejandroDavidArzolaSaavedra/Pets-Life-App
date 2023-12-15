export function addSearchInputListener() {
    const searchInput = document.getElementById('search-input');
 
    searchInput.addEventListener('input', function() {
        // Ignore uppercase
        const searchText = searchInput.value.toLowerCase();

        const rowsDesktop = document.querySelectorAll('#table-administration tbody tr');
        const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');

        // Filter the reservation in pc table
        rowsDesktop.forEach(row => {
            const daycareCell = row.querySelector('td:nth-child(3)'); 
            if (daycareCell) {
                const daycareName = daycareCell.textContent.toLowerCase();
                if (daycareName.includes(searchText)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none'; 
                }
            }
        });

        // Filter the reservation in phone table
        rowsMobile.forEach(row => {
            const daycareCell = row.querySelector('td:nth-child(3)'); 
            if (daycareCell) {
                const daycareName = daycareCell.textContent.toLowerCase();
                if (daycareName.includes(searchText)) {
                    row.style.display = ''; 
                } else {
                    row.style.display = 'none'; 
                }
            }
        });
    });
}
