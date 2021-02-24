import { Action, createReducer } from "@ngrx/store";
import { Todo } from "../model/todos.model";


const initialTodos: Todo[] = [
    new Todo('WF training', false),
    new Todo('Sample Todo', false)
];

const todoSelector = createReducer(
    initialTodos
);

export function reducer(todos: Todo[] | undefined, action: Action) {
    return todoSelector(initialTodos, action);
  }