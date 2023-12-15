import { fetchUserData } from './userDataService.js';
import{ initializeUserManagement } from "../loadUsersTable/userManagement.js"

export function createTableRows(users) {
    const tableBody = document.querySelector('#table-administration tbody');
    const mobileTableBody = document.querySelector('#table-administration-mobile tbody');
  
    users.forEach(user => {
      const row = tableBody.insertRow();
      const mobileRow = mobileTableBody.insertRow();
  
      // Adding content and styles to the table phone and table pc
      const photoCell = row.insertCell(0);
      photoCell.innerHTML = `<img src="${user.photo}" alt="User Photo" width="50" style="border-radius: 50%; display: block; margin: 0 auto;">`;
      const mobileEmailCell = mobileRow.insertCell(0);
      mobileEmailCell.style.textAlign = 'center';
      const mobileOperationsCell = mobileRow.insertCell(1);
      mobileOperationsCell.style.textAlign = 'center';
  
      mobileEmailCell.textContent = user.email;
  
      mobileOperationsCell.innerHTML = `
          <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;" 
              data-email="${user.email}">
              <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
          </button>
          <span class="mx-1"></span>
          <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${user.name}" style="background-color: transparent; border: none;">
              <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
          </button>
      `;
  
      const nameCell = row.insertCell(1);
      nameCell.textContent = user.name;
      nameCell.style.textAlign = 'center';
  
      const surnameCell = row.insertCell(2);
      surnameCell.textContent = user.surname;
      surnameCell.style.textAlign = 'center';
  
      const emailCell = row.insertCell(3);
      emailCell.textContent = user.email;
      emailCell.style.textAlign = 'center';
  
      const operationsCell = row.insertCell(4);
      operationsCell.innerHTML = `
          <button class="operation-button" aria-label="edit" style="background-color: transparent; border: none;" 
              data-email="${user.email}">
              <i class="fas fa-edit operation-icon" style="color: #005eff;"></i>
          </button>
          <span class="mx-1"></span>
          <button class="operation-button delete-button" aria-label="delete" data-toggle="modal" data-target="#confirmDeleteModal" data-username="${user.name}" style="background-color: transparent; border: none;">
              <i class="fas fa-trash operation-icon" style="color: #cc2305;"></i>
          </button>
      `;
      operationsCell.style.textAlign = 'center';
    });
  }
  

export async function loadUsersTable() {
  try {
    const data = await fetchUserData();
    createTableRows(data.users);
    initializeUserManagement(data.users);
  } catch (error) {
    console.error('Error:', error);
    window.location.href = '../html/error.html';
  }
}
