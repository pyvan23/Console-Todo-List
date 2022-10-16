import { Todo } from "./todo.js";




export class Todos {

    _listTodos = { };

    constructor() {

        this._listTodos = {};

    }

    createTodo (description = '') {

        const todo = new Todo(description);

        this._listTodos[todo.id] = todo;

    }

}
