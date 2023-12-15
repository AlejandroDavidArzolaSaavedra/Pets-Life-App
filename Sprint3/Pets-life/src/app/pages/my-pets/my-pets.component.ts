// my-pets.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {
  pets: any[] = [];
  selectedPet: any = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const userPetsData = localStorage.getItem('userPets');
    this.pets = userPetsData ? JSON.parse(userPetsData) : [];
  }

  selectPet(pet: any): void {
    this.selectedPet = pet;
    localStorage.setItem('selectedPet', JSON.stringify(this.selectedPet));
    this.router.navigate(['/edit-pet']);
  }
}
