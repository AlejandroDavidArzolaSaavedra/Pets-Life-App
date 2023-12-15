import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AppUser } from 'src/app/models/User/user/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/users/user.service';
import { Router, NavigationEnd } from '@angular/router'; // Importa NavigationEnd

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false;
  Rol = "";
  private userLogged: AppUser | undefined;
  admin: boolean = false;

  constructor(private auth: AuthService, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("Ruta cambió a: ", event.url);
        
    this.auth.isLoggedIn.subscribe((logged: boolean) => {
      this.isLogged = logged;
      if (this.isLogged) {
        this.Rol = "usuarioLogeado";
        if(this.auth.currentUser?.isAdmin){
          this.admin=true;
        }
      } 
    });
      }
    });
  }
}