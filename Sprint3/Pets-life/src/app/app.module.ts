import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing-module';
import { HeaderComponent } from './pages/components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './pages/components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutUsComponent } from './pages/aboutUs/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MyPetsComponent } from './pages/my-pets/my-pets.component';
import { AddPetComponent } from './pages/components/forms/add-pet/add-pet.component';
import { EditPetComponent } from './pages/components/forms/edit-pet/edit-pet.component';
import { EditProfileComponent } from './pages/components/forms/edit-profile/edit-profile.component';
import { AdminUsersComponent } from './pages/components/admins/admin-users/admin-users.component';
import { AdminBookingsComponent } from './pages/components/admins/admin-bookings/admin-bookings.component';
import {environment} from './environments/environment';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {HttpClientModule} from '@angular/common/http';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage, } from '@angular/fire/storage';



//import {provideAuth, getAuth} from 'firebase/auth';
import { AngularFireModule } from '@angular/fire/compat'; 
import {provideAuth, getAuth} from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HeaderUserLoggedComponent } from './pages/components/header-user-logged/header-user-logged.component';
import { HeaderAdminUserComponent } from './pages/components/header-admin-user/header-admin-user.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomepageComponent,
    AboutUsComponent,
    OurServicesComponent,
    SignUpComponent,
    InitPageComponent,
    ReservationComponent,
    HistoryComponent,
    ProfileComponent,
    MyPetsComponent,
    AddPetComponent,
    EditPetComponent,
    EditProfileComponent,
    AdminUsersComponent,
    AdminBookingsComponent,
    HeaderUserLoggedComponent,
    HeaderAdminUserComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    provideAuth(() => getAuth()),
    provideFirebaseApp( () => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
