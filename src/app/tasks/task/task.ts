import { Component, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskInt } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrl: './task.scss',
  standalone: false,
})
export class Task {
  @Input({ required: true }) task!: TaskInt;
  // @Output() complete = new EventEmitter<string>();
  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }


}
