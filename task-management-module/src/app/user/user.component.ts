// import { Component } from '@angular/core';
// import { DUMMY_USERS } from '../dummy/dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex];

//   get imagePath() {
//     return 'assets/users/' + this.selectedUser.avatar;
//   }

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }

// import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy/dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  

//   onSelectUser() {
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//   }
// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
// export class UserComponent {
//   @Input({required: true}) id!: string;
//   @Input({required: true}) avatar!: string;
//   @Input({required: true}) name!: string;  
  
//   //@Input is a decorator used to pass data from a parent component to a child component.
//   //avatar = input.required<string>();

//   @Output() select = new EventEmitter();
//   // using output() function
//   //select = output<string>();

//   get imagePath() {
//     return 'assets/users/' + this.avatar;
//   }

//   onSelectUser() {
//     this.select.emit(this.id);
//   }
// }


export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  
  //@Input is a decorator used to pass data from a parent component to a child component.
  //avatar = input.required<string>();

  @Output() select = new EventEmitter();
  // using output() function
  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}