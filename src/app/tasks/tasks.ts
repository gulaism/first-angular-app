import { Component, inject, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";
import { type NewTaskData } from "./task/task.model";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input() userId!: string;
  @Input() user?: (typeof DUMMY_USERS)[0];
 
  isAddingTask = false;

  private tasksService = inject(TasksService);

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }
}
