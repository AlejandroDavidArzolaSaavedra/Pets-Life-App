import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.css'],
})
export class InitPageComponent implements OnInit {
  daycareId: string | undefined;
  selectedDaycare: any;
  allDaycares: any[] = [];
  reviews: any[] = [];

  constructor(private route: ActivatedRoute, private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.loadDaycares();
    this.route.params.subscribe((params) => {
      this.daycareId = params['id'];
    });
    this.loadPets();
  }

  async loadPets() {
    try {
      const currentUserData = localStorage.getItem('currentUser');
      
      if (currentUserData) {
        const currentUser = JSON.parse(currentUserData);
        const userId = currentUser.id;
        const pets = await this.firestoreService.getDocsByFieldOwnerId(userId, 'pets');
        localStorage.setItem('userPets', JSON.stringify(pets));
      } else {
      }
    } catch (error) {
    }
  }
  

  loadDaycares() {
    const coleccion = 'daycare';
    this.firestoreService.getAllDocs(coleccion).subscribe((data) => {
      this.allDaycares = data;
      if (!this.selectedDaycare && this.allDaycares.length > 0) {
        const storedDaycareString = localStorage.getItem('selectedDaycare');
        const defaultDaycare = storedDaycareString
          ? JSON.parse(storedDaycareString)
          : this.allDaycares[0];

        this.selectDaycare(defaultDaycare);
      }
    });
  }

  selectDaycare(daycareItem: any) {
    this.selectedDaycare = daycareItem;
    localStorage.setItem('selectedDaycare', JSON.stringify(this.selectedDaycare));
    this.loadReviews();
  }

  loadReviews() {
    if (this.selectedDaycare) {
      this.firestoreService
        .getAllDocuments(`daycare/${this.selectedDaycare.id}/reviews`)
        .subscribe((data) => {
          this.reviews = data;
          console.log(this.reviews);
        });
    }
  }
}
