import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-header-user-logged',
  templateUrl: './header-user-logged.component.html',
  styleUrls: ['../header/header.component.css']
})
export class HeaderUserLoggedComponent {
  isLogged: boolean | undefined;
  
  constructor(private auth: AuthService, private userService: UserService, private router: Router) {}

  logOut(){     
    this.isLogged=false;

    this.auth.logOut().then(() => {
      window.location.reload();
    }).catch((error) => {
      console.error("Error al cargar logOut", error);
    })
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
