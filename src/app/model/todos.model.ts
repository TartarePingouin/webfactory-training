export class Todos {

    public todos: Todo[] = [];
}

export class Todo {
    constructor(
        public title: string,
        public status: boolean
    ) { };
}