import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any; 
  userPetsCount: number | undefined; 

  constructor() {}

  ngOnInit(): void {
    const currentUserString = localStorage.getItem('currentUser');
    if (currentUserString) {
      console.log(JSON.parse(currentUserString));
      this.currentUser = JSON.parse(currentUserString);
    } 
    const userPetsString = localStorage.getItem('userPets');
    if (userPetsString) {
      this.userPetsCount = JSON.parse(userPetsString).length;
    }
  }
}
