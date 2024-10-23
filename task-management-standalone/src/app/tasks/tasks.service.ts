import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy/dummy-tasks';
import { type Task, type NewTask } from './task/task.model';

// make a class injectable
@Injectable({providedIn: 'root'})
export class TasksService {
  private tasks = DUMMY_TASKS;

  constructor () {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  getUserTasks(userId: string) {
    return this.tasks.filter(task => task.userId === userId);
  }

  addTask(task: NewTask, userId: string) {
    let newTask: Task = {
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate
    };
    this.tasks.unshift(newTask);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }
}