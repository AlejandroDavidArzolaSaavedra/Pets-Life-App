import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from '../firestore/firestore.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AppUser } from 'src/app/models/User/user/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUser: AppUser | undefined;

  isAdmin(): Observable<boolean> {
  const storedUser = localStorage.getItem('currentUser');
  const isAdmin = storedUser ? JSON.parse(storedUser).isAdmin : false;
  return of(isAdmin);
  }

  constructor(private auth: AngularFireAuth, private firestore: FirestoreService) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.loadUserData(user.uid);
        this.userLogged.next(true);
      } else {
        this.currentUser = undefined;
        this.userLogged.next(false);
      }
    });
  }



  private async loadUserData(uid: string) {
    try {
      const userData = await this.firestore.getDocsByFieldUserId(uid, 'users');
      
      if (userData.length > 0) {

        const user: AppUser = userData[0] as AppUser;
        
        this.currentUser = {
          id: user.id,
          correo: user.correo || '',
          password:'',
          apellidos: user.apellidos ||'',
          isAdmin: user.isAdmin || false,
          nombre: user.nombre || '',
          foto: user.foto || '',
        };
        console.log(user)
        localStorage.setItem('currentUser', JSON.stringify(user));
      } else {
        console.log("No user data found for the given UID.");
      }
    } catch (error) {
      console.log("Error getting user data:", error);
    }
  }
  
  get isLoggedIn() {
    return this.userLogged.asObservable();
  }

  async createUser(email: string, contra: string) {
    return this.auth.createUserWithEmailAndPassword(email, contra);
  }

  async loginUser(userEmail: string, userPassword: string) {
    return await this.auth.signInWithEmailAndPassword(userEmail, userPassword);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    return this.auth.signOut();
  }
}
