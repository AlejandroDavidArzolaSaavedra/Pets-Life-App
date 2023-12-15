import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppUser } from '../../models/User/user/user.model';
import { UserService } from '../../services/users/user.service';
import { FileUpload } from '../../models/File/file.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup; 

  user: AppUser = {
    id: '',
    nombre: '',
    correo: '',
    isAdmin: false,
    foto: '',
    apellidos: '',
    password: '',
  };

  pass = '';
  passConfirm = '';
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder 
  ) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: [''],
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    
  }

  ngOnInit() {
  }

 async signUp() {
  try {
    if (this.pass === this.passConfirm) {
      this.user.nombre = this.userForm.get('nombre')?.value || '';
      this.user.apellidos = this.userForm.get('apellidos')?.value || '';
      this.user.correo = this.userForm.get('correo')?.value || '';
      this.user.password = this.userForm.get('password')?.value || '';

      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
        this.selectedFiles = undefined;

        if (file) {
          this.currentFileUpload = new FileUpload(file);
          this.currentFileUpload.type = "user";
          this.user.foto = this.currentFileUpload.name;
        }
        console.log("hay un fichero");
        console.log(this.user, this.user.password);

        await this.userService.createUser(this.user, this.user.password, this.currentFileUpload);

        console.log("User created successfully");
        this.router.navigate(['login']);
      } else {
        console.log("NO hay un fichero");
      }
    }
  } catch (error) {
    console.error('Error during sign up:', error);
  }
}

  

  onFileSelected(event: Event) {
    this.selectedFiles = (<HTMLInputElement>event.target).files!
  }

  onFileChange(event: any) {
    this.selectedFiles = event.target.files;
  }
}