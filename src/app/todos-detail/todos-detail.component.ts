import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo, Todos } from '../model/todos.model';

@Component({
  selector: 'app-todos-detail',
  templateUrl: './todos-detail.component.html',
  styleUrls: ['./todos-detail.component.scss']
})
export class TodosDetailComponent {

  public todo$: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<Todos>
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo$ = this.store.select(state => state.todos.find(todo => todo.id === id));
  }

}
