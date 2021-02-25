import { createAction, props } from "@ngrx/store";
import { Todo } from "../model/todos.model";
import { State } from "../state/todos.reducer";

export class TodosListActions {

    private static readonly actionPrefix = "[Todos List] ";

    public static readonly toggleStatus = createAction(
        TodosListActions.actionPrefix + "Toggle Status",
        props<{id: string}>()
        );
}