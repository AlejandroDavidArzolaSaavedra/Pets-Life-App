import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
  styleUrls: ['./admin-bookings.component.css']
})
export class AdminBookingsComponent {
  reservations: any[] = [];
  searchDaycare: string = '';
  deleteUserName: string = '';
  deleteIdEvent: string = '';
  allReservations: any[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    const coleccion = 'history';
    if (this.allReservations.length === 0) {
      this.firestoreService.getAllDocs(coleccion).subscribe((data) => {
        this.allReservations = data;
        this.filterReservations();
      });
    } else {
      this.filterReservations();
    }
  }

  filterReservations() {
    this.reservations = [];

    for (const history of this.allReservations) {
      if (history.reservations && history.reservations.length > 0) {
        this.reservations = this.reservations.concat(history.reservations);
      }
    }

    if (this.searchDaycare.trim() !== '') {
      this.reservations = this.reservations.filter(reservation => {
        return (
          reservation.daycareName.toLowerCase().includes(this.searchDaycare.toLowerCase())
        );
      });
    }
  }
  
  onSearchInputChange() {
    this.filterReservations();
  }

  confirmDelete(reservation: any) {
    this.deleteUserName = reservation.user;
    this.deleteIdEvent = reservation.id;
  }

  deleteReservation() {
  }
}
