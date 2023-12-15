import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseStorage } from 'firebase/storage';
import { Pet } from 'src/app/models/Pet/pet.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent {

  constructor(private auth: AuthService, private firestore: FirestoreService, private router: Router) {}
  pet: Pet = {name:"", weight: "", photo:"", type:"", breed: "", petId: "", userId: ""};
  
  async addPet() {
    const currentUser = this.auth.currentUser;
    if (!currentUser) {
      return;
    }
    const petData: Pet = {
      name: this.pet.name,
      weight: this.pet.weight,
      photo: this.pet.photo,
      type: this.pet.type,
      breed: this.pet.breed,
      petId: this.pet.petId,
      userId: currentUser.id 
    };

    console.log("pet actualizado con datos de auth: ",petData)

    await this.firestore.createDoc(`pets`, {
      name: petData.name,
      weight: petData.weight,
      photo: petData.photo,
      type: petData.type,
      breed: petData.breed,
      petId: petData.petId,
      userId: petData.userId,

    },)

    this.router.navigate(['my-pets'])

  }

  



}
