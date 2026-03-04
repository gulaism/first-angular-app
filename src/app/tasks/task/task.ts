import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInt } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({ required: true }) task!: TaskInt;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }


}
