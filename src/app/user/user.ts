import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    avatar: string;
  };
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return `assets/users/` + this.user.avatar;  
  }

  onSelectUserrr() {
    this.select.emit(this.user.id);
  }
}
