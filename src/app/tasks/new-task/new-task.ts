import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Output() close = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseModal() {
    this.close.emit();
  }
}
