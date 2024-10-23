import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf]
})
export class AppComponent {
  title = 'my-first-app';

  users = DUMMY_USERS;

  selectedUserId!: string;

  onSelectUser(id: string) {
    console.log('Select user id: ' + id);
    this.selectedUserId = id;
  }
}
