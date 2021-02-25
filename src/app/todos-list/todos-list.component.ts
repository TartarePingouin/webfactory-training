import { Component, OnInit } from '@angular/core';
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

  public todosDone: Observable<Todo[]>;
  public todosNotDone: Observable<Todo[]>;


  constructor(private store: Store<Todos>) {
    this.todosDone = this.store.select(state => state.todos.filter(todo => todo.done));
    this.todosNotDone = this.store.select(state => state.todos.filter(todo => !todo.done));
  }

  public onStatusCheckboxClick(todoId: string): void {
    this.store.dispatch(TodosListActions.toggleStatus({ id: todoId }));
  }

}
