import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class HistoryComponent implements OnInit {
  pendingReservations: any[] = []; 
  reservationHistory: any[] = [];

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    const currentUserInfo = localStorage.getItem('currentUser');
    console.log(currentUserInfo);
  
    if (currentUserInfo) {
      const currentUser = JSON.parse(currentUserInfo);
  
      const currentDate = new Date();
      console.log(currentUser.id);
  

      this.firestoreService.getDocsByFieldOwnerId(currentUser.id, 'history').then((data) => {
  
        this.pendingReservations = data.map((reservation) => reservation['reservations'])
          .flat()
          .filter((singleReservation) => {
            console.log(singleReservation)
            const checkInDate = new Date(singleReservation['checkIn']);
            const checkOutDate = new Date(singleReservation['checkOut']);
            console.log(currentDate >= checkInDate && currentDate <= checkOutDate);
            return currentDate >= checkInDate && currentDate <= checkOutDate;
          });
      });
  
      this.firestoreService.getDocsByFieldOwnerId(currentUser.id, 'history').then((data) => {
 
        this.reservationHistory = data.map((reservation) => reservation['reservations'])
          .flat()
          .filter((singleReservation) => {
            console.log(singleReservation)
            const checkOutDate = new Date(singleReservation['checkOut']);
            console.log(currentDate > checkOutDate);
            return currentDate > checkOutDate;
          });
          console.log(this.reservationHistory)
      });
    } else {
      console.error('User UID not found in Local Storage');
    }
    console.log(this.reservationHistory)
    console.log(this.pendingReservations)
  }  
}

