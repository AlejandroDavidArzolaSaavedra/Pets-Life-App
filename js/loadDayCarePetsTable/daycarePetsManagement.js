import { addCloseAndCancelButtonListener } from '../loadDayCarePetsTable/handlePetsAction/addCloseAndCancelButtonListener.js';
import { addConfirmDeleteButtonListener } from '../loadDayCarePetsTable/handlePetsAction/addConfirmDeleteButtonListener.js';
import { addDeleteButtonListener } from '../loadDayCarePetsTable/handlePetsAction/addDeleteButtonListener.js';
import { addSearchInputListener } from '../loadDayCarePetsTable/handlePetsAction/addSearchInputListener.js';
import { addEditButtonListener } from '../loadDayCarePetsTable/handlePetsAction/addEditButtonListener.js';
// --- MAIN CONTROLLER FUNCTION ---
export function initializeDaycarePetsManagement(daycarePets) {
    // The listeners of the table as RUD
    addDeleteButtonListener();
    addEditButtonListener(daycarePets);
    addConfirmDeleteButtonListener();
    addCloseAndCancelButtonListener();
    addSearchInputListener();
}
  