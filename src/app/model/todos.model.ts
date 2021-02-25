export class Todos {

    public todos: Todo[] = [];
}

export class Todo {
    constructor(
        public id: string,
        public title: string,
        public done: boolean
    ) { };
}