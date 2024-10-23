import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy/dummy-users';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
