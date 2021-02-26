import { createAction, props } from "@ngrx/store";
import { Todo } from "../model/todos.model";

export class TodoCreationActions {

    private static readonly actionPrefix = "[Todo Creation] ";

    public static readonly createTodo = createAction(
        TodoCreationActions.actionPrefix + "Create Todo",
        props<{title: string, description: string}>()
        );
}