import { createAction, props } from "@ngrx/store";

export class TodosListActions {

    private static readonly actionPrefix = "[Todos List] ";

    public static readonly toggleStatus = createAction(
        TodosListActions.actionPrefix + "Toggle Status",
        props<{id: string}>()
        );
}