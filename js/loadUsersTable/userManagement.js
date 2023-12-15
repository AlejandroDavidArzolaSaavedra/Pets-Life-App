import { addCloseAndCancelButtonListener } from '../loadUsersTable/handleUserAction/addCloseAndCancelButtonListener.js';
import { addConfirmDeleteButtonListener } from '../loadUsersTable/handleUserAction/addConfirmDeleteButtonListener.js';
import { addDeleteButtonListener } from '../loadUsersTable/handleUserAction/addDeleteButtonListener.js';
import { addSearchInputListener } from '../loadUsersTable/handleUserAction/addSearchInputListener.js';
import { addEditButtonListener } from '../loadUsersTable/handleUserAction/addEditButtonListener.js';
// --- MAIN CONTROLLER FUNCTION ---
export function initializeUserManagement(users) {
    // The listeners of the table as RUD
    addDeleteButtonListener();
    addEditButtonListener(users);
    addConfirmDeleteButtonListener();
    addCloseAndCancelButtonListener();
    addSearchInputListener();
}
  