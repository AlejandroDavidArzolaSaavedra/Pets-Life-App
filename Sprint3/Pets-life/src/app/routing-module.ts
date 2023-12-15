import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
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

const routes: Routes = [
{ path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-services', component: OurServicesComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'init-page', component: InitPageComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'my-pets', component: MyPetsComponent },
  { path: 'add-pet', component: AddPetComponent },
  { path: 'edit-pet', component: EditPetComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'admin-users', component: AdminUsersComponent },
  { path: 'admin-bookings', component: AdminBookingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }