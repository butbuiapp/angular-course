import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveName, resolveTitle, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/user.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (
  route, segments
) => {
  // const router = inject(Router);
  // const shouldGetAccess = Math.random();
  // if (shouldGetAccess < 0.5) {
  //   return true;
  // } else {
  //   return new RedirectCommand(router.parseUrl('/unauthorized'));
  // }
  return true;
}

export const routes: Routes = [
  {
    path: '', 
    component: NoTaskComponent,
    //redirectTo: '/users/id1',
    //pathMatch: 'full',
    title: "No Task"
  },
  {
    path: 'users/:userId', 
    component: UserTasksComponent,
    resolve: {
      userName: resolveName
    },
    title: resolveTitle,
    children: userRoutes,
    canMatch: [dummyCanMatch]
  },
  {
    path: '**', component: NotFoundComponent
  }
]

