export function addSearchInputListener() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
        const searchText = searchInput.value.toLowerCase();
    
        const rowsDesktop = document.querySelectorAll('#table-administration tbody tr');
    
        const rowsMobile = document.querySelectorAll('#table-administration-mobile tbody tr');
    
        rowsDesktop.forEach(row => {
            const nameCell = row.querySelector('td:nth-child(2)');
            const emailCell = row.querySelector('td:nth-child(4)');
            if (nameCell && emailCell) {
                const name = nameCell.textContent.toLowerCase();
                const email = emailCell.textContent.toLowerCase();
                if (name.includes(searchText) || email.includes(searchText)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    
        rowsMobile.forEach(row => {
            const emailCell = row.querySelector('td:nth-child(1)');
            if (emailCell) {
                const email = emailCell.textContent.toLowerCase();
                if (email.includes(searchText)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        });
    });
}
