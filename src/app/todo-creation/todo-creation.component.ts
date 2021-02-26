import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todos } from '../model/todos.model';
import { TodoCreationActions } from './todo-creation.actions';

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  styleUrls: ['./todo-creation.component.scss']
})
export class TodoCreationComponent {

  public creationFormControl = new FormGroup({
    title: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private store: Store<Todos>
  ) { }

  public onCreationSubmit(): void {
    this.store.dispatch(TodoCreationActions.createTodo({
      title: this.creationFormControl.value.title,
      description: this.creationFormControl.value.description
    }))
  }


}
