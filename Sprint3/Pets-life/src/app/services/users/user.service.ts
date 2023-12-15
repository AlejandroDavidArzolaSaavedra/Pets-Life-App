import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { AppUser } from '../../models/User/user/user.model';
import { FirestoreService } from '../firestore/firestore.service';
import { AuthService } from '../auth/auth.service';
import { FileUpload } from '../../models/File/file.model';
import { StorageService } from '../storage/storage.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collectionDoc = 'users';
  private storageService: StorageService | undefined;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private firestoreService: FirestoreService,
  ) {

  }

  getUsers(): Observable<AppUser[]> {
    return this.firestoreService.getAllDocs(this.collectionDoc);
  }

  getUserById(userId: string) {
    return this.firestoreService.getDocById(this.collectionDoc + `/${userId}`);
  }

  async createUser(user: AppUser, userPassword: string, fileUpload: FileUpload | undefined) {
    const userCredentials = await this.authService.createUser(user.correo, userPassword);

    if (userCredentials.user?.uid) {
      user.id = userCredentials.user.uid;
    } else {
      console.error('UID de usuario no disponible.');
    }
    
    await this.firestoreService.createDocWithId(`users`, {
      is_admin: user.isAdmin,
      photo_url: "",
      username: user.nombre
    }, user.id);
    
    this.authService.logOut();

    if (fileUpload !== undefined) {
      /*          -----FIRE STORAGE-----
      this.storeUserImage(fileUpload.file, user.id).subscribe((urlListener) => {
        urlListener.subscribe((url: string) => {
          user.foto = url;
          console.log("url de la foto: ", user.foto);
          this.editUser(user);
        });
      });*/
    }
  }


  
  storeUserImage(file: File, id: string) {
    if (this.storageService) {
      return this.storageService.pushFileToStorage({
        file: file,
        key: id,
        name: file.name,
        type: 'user',
        url: '',
      }, id);
    } else {
      console.error('StorageService is undefined.');
      return throwError('StorageService is undefined.');
    }
  }
  

  async getImageUser(uid: string) {
    return this.storageService?.getUserImageUrl(uid, this.collectionDoc);
  }

  editUser(user: AppUser) {
    return this.firestoreService.updateDoc(`${this.collectionDoc}/${user.id}`, user);
  }
  private async createReservations(reservationsCollection: string, reservations: any[]) {
    reservations.forEach(async (reservation: any) => {
      try {
        await this.firestoreService.createDocWithId(reservationsCollection, reservation, reservation.id);
  
        console.log(`Documento de reserva creado para ${reservation.id}`);
      } catch (error) {
        console.error(`Error creando documento de reserva para ${reservation.id}:`, error);
      }
    });
  } 
}