import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Todo, Todos } from "../model/todos.model";
import { TodoCreationActions } from "../todo-creation/todo-creation.actions";
import { TodosListActions } from "../todos-list/todos-list.actions";

export interface State {
    todos: Todos;
}

const initialTodos: Todo[] = [
    new Todo('0', 'WF training', 'Training details !!'),
    new Todo('1', 'Sample Todo', 'Very detailed stuff')
];

const todoReducer = createReducer(
    initialTodos,
    on(TodosListActions.toggleStatus, (state, { id }) => {
        const todo = state.find(todo => todo.id === id);
        todo.done = !todo.done;
        return state;
    }),
    on(TodoCreationActions.createTodo, (state, { title, description }) => {
        // Get max id
        const maxId = Math.max(...state.map(todo => Number(todo.id)));
        const todo = new Todo('' + (maxId +1), title, description);
        state.push(todo);
        state = state.sort((a,b) => Number(b.id) - Number(a.id));
        return state;
    })
);
;

export function reducer(todos: Todo[] | undefined, action: Action) {
    return todoReducer(initialTodos, action);
}

