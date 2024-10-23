import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTask>();

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  // enteredTitle = signal(''); 
  // enteredSummary = signal(''); 
  // enteredDate = signal('');  

  onCancel() {
    this.close.emit();
  }

  // onSubmit() {
  //    let task = {
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     dueDate: this.enteredDate
  //   };
  //   this.add.emit(task);
  // }

  onSubmit() {
    this.tasksService.addTask( {
     title: this.enteredTitle,
     summary: this.enteredSummary,
     dueDate: this.enteredDate
   }, this.userId);
   this.close.emit();
 }
}
