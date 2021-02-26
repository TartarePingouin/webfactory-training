import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';
import { TodosListComponent } from './todos-list/todos-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosListComponent, pathMatch: 'full' },
  { path: 'todos/:id', component: TodosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
