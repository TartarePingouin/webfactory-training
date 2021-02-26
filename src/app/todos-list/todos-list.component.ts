import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, Todos } from '../model/todos.model';
import { TodosListActions } from './todos-list.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {

  public todos: Observable<Todo[]>;


  constructor(
    private store: Store<Todos>,
    private router: Router
    ) {
    this.todos = this.store.select(state => state.todos.sort((a,b) => a.done === b.done ? 0 : a.done ? 1 : -1));
  }

  public onStatusCheckboxClick(todoId: string): void {
    this.store.dispatch(TodosListActions.toggleStatus({ id: todoId }));
  }

  public navigateToDetails(id: string) {
    this.router.navigateByUrl("todos/" + id); // add switchMap ?
  }

}
