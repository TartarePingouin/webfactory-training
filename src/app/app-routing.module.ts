import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosDetailComponent } from './todos-detail/todos-detail.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosOverviewComponent } from './todos-overview/todos-overview.component';


const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'todos', component: TodosOverviewComponent, pathMatch: 'full' },
  { path: 'todos/:id', component: TodosDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
