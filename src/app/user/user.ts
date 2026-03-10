import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

import { type UserObject } from './user.model';
import { Card } from "../shared/card/card"; // type definition


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({ required: true }) user!: UserObject;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  get imagePath() {
    return `assets/users/` + this.user.avatar;  
  }

  onSelectUserrr() {
    this.select.emit(this.user.id);
  }
}
