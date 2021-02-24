import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, Todos } from '../model/todos.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  public todos: Observable<Todo[]>;

  constructor(private store: Store<Todos>) {
    this.todos = this.store.select(state => state.todos);
  }

  ngOnInit() {
  }

}
