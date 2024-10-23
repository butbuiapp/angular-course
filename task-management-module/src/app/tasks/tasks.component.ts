import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy/dummy-users';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy/dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { Task, type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  tasks = DUMMY_TASKS;
  isAddingTask: boolean = false;

  // private tasksService = new TasksService();
  // constructor(tasksService: TasksComponent) {
  //   this.tasksService = tasksService;
  // }

  constructor(private tasksService: TasksService) {

  }

  get selectedUser() {
    return DUMMY_USERS.find(user => user.id === this.userId);
  }

  get selectedUserTasks() {
    //return this.tasks.filter(task => task.userId === this.userId);
    return this.tasksService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {
  //   //console.log("task id: " + id);
  //   //this.tasks = this.tasks.filter(task => task.id !== id);
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(task: NewTask) {
  //   // let newTask: Task = {
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title: task.title,
  //   //   summary: task.summary,
  //   //   dueDate: task.dueDate
  //   // };
  //   // this.tasks.unshift(newTask);

  //   this.tasksService.addTask(task, this.userId);
  //   this.isAddingTask = false;
  // }
}
