import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { Tasks } from './tasks';

@NgModule({
  declarations: [Tasks, Task, NewTask],
  exports: [Tasks],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}
