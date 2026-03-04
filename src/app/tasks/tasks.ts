import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from './task/task';
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input() userId!: string;
  @Input() user?: (typeof DUMMY_USERS)[0];
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2026-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build the first prototype of the online shop website',
      dueDate: '2026-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary: 'Prepare and describe an issue template which will help project management',
      dueDate: '2026-06-15',
    },
  ];
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onClose() {
    this.isAddingTask = false;
  }
}
