import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  users = DUMMY_USERS;
  currentUser?: typeof DUMMY_USERS[0];
  
  onSelectUser(id: string) {
    console.log('Id is: '+ id);
    this.currentUser = this.users.find(user => user.id === id)!;
  }
}
