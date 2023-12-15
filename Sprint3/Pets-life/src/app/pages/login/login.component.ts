import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private auth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async login() {
    try {
      const { email, password } = this.loginForm.value;
      await this.auth.signInWithEmailAndPassword(this.email, this.password);

      this.router.navigate(['/init-page']);
      
    } catch (error: any) {
      this.handleFirebaseError(error.code);
    }
  }
  
  private handleFirebaseError(errorCode: string) {
    switch (errorCode) {
      case 'auth/invalid-email':
        this.errorMessage = 'User not found. Please check your email or password.';
        break;
      default:
        this.errorMessage = 'An error occurred. Please try again later.';
        break;
    }
  }
  
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
  
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
