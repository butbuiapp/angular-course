import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [DatePipe, CardComponent],
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRouter = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    // reload page after removing task from list
    this.router.navigate(['./'], {
      relativeTo: this.activatedRouter,
      onSameUrlNavigation: 'reload',
      queryParamsHandling: 'preserve' // preserve params and query string params
    });
  }
}