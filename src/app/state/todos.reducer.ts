import { Action, createReducer, on } from "@ngrx/store";
import { Todo, Todos } from "../model/todos.model";
import { TodosListActions } from "../todos-list/todos-list.actions";

export interface State {
    todos: Todos;
}

const initialTodos: Todo[] = [
    new Todo('0', 'WF training', false),
    new Todo('1', 'Sample Todo', false)
];

const todoReducer = createReducer(
    initialTodos,
    on(TodosListActions.toggleStatus, (state, { id }) => {
        const todo = state.find(todo => todo.id === id);
        todo.done = !todo.done;
        return state;
    })
);
;

export function reducer(todos: Todo[] | undefined, action: Action) {
    return todoReducer(initialTodos, action);
}

