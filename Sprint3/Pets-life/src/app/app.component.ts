import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isUserLoggedIn = false;
  isAdmin = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isUserLoggedIn = loggedIn;

      if (loggedIn) {
        this.authService.isAdmin().subscribe((isAdmin: boolean) => {
          this.isAdmin = isAdmin;
        });
      }
    });
  }
}
