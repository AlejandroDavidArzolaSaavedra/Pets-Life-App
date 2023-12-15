import { fetchReservationData } from './daycarePetsDataService.js';
import{ initializeDaycarePetsManagement } from "../loadDayCarePetsTable/daycarePetsManagement.js"

export function createTableRows(daycarePets) {
    const tableBody = document.querySelector('#table-administration tbody');
    const mobileTableBody = document.querySelector('#table-administration-mobile tbody');

    // Loop of daycare Pets
    daycarePets.forEach(reservation => {
        const row = tableBody.insertRow();
        const mobileRow = mobileTableBody.insertRow();

        const mobileIdCell = mobileRow.insertCell(0);
        mobileIdCell.style.textAlign = 'center'; 
        mobileIdCell.style.display = 'none';

                
        const mobileEmailCell = mobileRow.insertCell(1);
        mobileEmailCell.style.textAlign = 'center'; 
                
        const mobilDayCareCell = mobileRow.insertCell(2);
        mobilDayCareCell.style.textAlign = 'center'; 

        const mobileOperationsCell = mobileRow.insertCell(3);
        mobileOperationsCell.style.textAlign = 'center'; 

        mobilDayCareCell.textContent = reservation.daycareName;
        mobileEmailCell.textContent = reservation.ownerName;
        mobileIdCell.textContent = reservation.id;

        mobileOperationsCell.innerHTML = `
            <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;">
                <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
            </button>
            <span class="mx-1"></span>
            <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${reservation.ownerName}" data-id="${reservation.id}" style="background-color: transparent; border: none;">
                    <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
            </button>
        `;

        const idReservationCell = row.insertCell(0);
        idReservationCell.textContent = reservation.id;
        idReservationCell.style.textAlign = 'center';
        idReservationCell.style.display = 'none';

        const userNameCell = row.insertCell(1);
        userNameCell.textContent = reservation.ownerName;
        userNameCell.style.textAlign = 'center';

        const daycareNameCell = row.insertCell(2);
        daycareNameCell.textContent = reservation.daycareName;
        daycareNameCell.style.textAlign = 'center'; 

        const checkInCell = row.insertCell(3);
        checkInCell.textContent = reservation.checkIn;
        checkInCell.style.textAlign = 'center'; 

        const checkOutCell = row.insertCell(4);
        checkOutCell.textContent = reservation.checkOut;
        checkOutCell.style.textAlign = 'center'; 
        
        const operationsCell = row.insertCell(5);
        operationsCell.innerHTML = `
            <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;">
                <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
            </button>
            <span class="mx-1"></span>
            <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${reservation.ownerName}" data-id="${reservation.id}" style="background-color: transparent; border: none;">
                <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
            </button>
        `;
    operationsCell.style.textAlign = 'center';
    });
}
  

export async function loadDaycarePetsTable() {
    try {
        const data = await fetchReservationData();
        // Load table rows with the content
        createTableRows(data.daycarePets);
        initializeDaycarePetsManagement(data.daycarePets);
      } catch (error) {
        console.error('Error:', error);
        window.location.href = '../html/error.html';
      }
}
