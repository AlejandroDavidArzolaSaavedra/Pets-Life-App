import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent {
  users: any[] = [];
  searchQuery: string = '';
  deleteUserName: string = '';
  allUsers: any[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.loadUsers();
    console.log(this.users)
  }
  
  loadUsers() {
    const coleccion = 'users';
    if (this.allUsers.length === 0) {
      this.firestoreService.getAllDocs(coleccion).subscribe((data) => {
        this.allUsers = data;
        this.filterUsers();
      });
    } else {
      this.filterUsers();
    }
  }

  filterUsers() {
    if (this.searchQuery.trim() === '') {
      this.users = this.allUsers;
    } else {
      this.users = this.allUsers.filter(user => {
        return (
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      });
    }
  }

  onSearchInputChange() {
    this.filterUsers(); 
  }

  confirmDelete(user: any) {
    this.deleteUserName = user.name;
  }

  deleteUser() {
  }
}

