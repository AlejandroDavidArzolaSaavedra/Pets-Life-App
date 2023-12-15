import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  selectedDaycare: any;
  userPets: any[] = [];
  totalPrice: number = 0;
  petNames: string[] = [];
  selectedPets: string[] = [];
  additionOptions: string[] = ['Option1', 'Option2', 'Option3']; 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedDaycare']) {
      this.selectedPets = [this.selectedDaycare.pet1, this.selectedDaycare.pet2, this.selectedDaycare.pet3];
    }
  }

  ngOnInit(): void {
    const selectedDaycareData = localStorage.getItem('selectedDaycare');
    const userPetsData = localStorage.getItem('userPets');

    this.selectedDaycare = selectedDaycareData ? JSON.parse(selectedDaycareData) : null;
    this.userPets = userPetsData ? JSON.parse(userPetsData) : [];
    this.petNames = this.userPets.map(pet => pet.name);
    this.selectedPets = [this.selectedDaycare.pet1, this.selectedDaycare.pet2, this.selectedDaycare.pet3];
    this.calculateTotalPrice();
  }

  calculateTotalPrice(): void {
    if (!this.selectedDaycare || !this.selectedDaycare.pricePerDay || !this.selectedDaycare.checkIn || !this.selectedDaycare.checkOut) {
      this.totalPrice = 0;
      return;
    }

    const pricePerDay = parseFloat(this.selectedDaycare.pricePerDay.replace('$', ''));
    const checkInDate: Date = new Date(this.selectedDaycare.checkIn);
    const checkOutDate: Date = new Date(this.selectedDaycare.checkOut);

    if (checkOutDate < checkInDate) {
      this.totalPrice = 0;
      return;
    }

    const daysDifference: number = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    const totalPetPrice = this.userPets.reduce((total, pet) => {
      return total + (parseFloat(pet.weight) * daysDifference);
    }, 0);

    const additionalServicesPrice = this.calculateAdditionalServicesPrice();

    this.totalPrice = (pricePerDay * daysDifference) + totalPetPrice + additionalServicesPrice;
  }

  isPetDisabled(petName: string): boolean {
    return this.selectedPets.includes(petName);
  }

  isServiceDisabled(serviceName: string): boolean {
    return this.selectedDaycare.services.includes(serviceName);
  }

  isAdditionDisabled(additionName: string): boolean {
    return (
      this.selectedDaycare.addition1 === additionName ||
      this.selectedDaycare.addition2 === additionName ||
      this.selectedDaycare.addition3 === additionName
    );
  }

  calculateAdditionalServicesPrice(): number {
    const services = this.selectedDaycare.services || [];
    const selectedServices = services.slice(0, 3);
    const randomCosts = selectedServices.map(() => Math.random() * 20);

    return randomCosts.reduce((total: any, cost: any) => total + cost, 0);
  }
}
