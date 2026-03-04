import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from "./tasks/tasks";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Tasks],
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
