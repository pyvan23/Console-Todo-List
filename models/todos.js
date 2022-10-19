import { Todo } from "./todo.js";




export class Todos {

    _listTodos = {};

    constructor() {

        this._listTodos = {};

    }

    createTodo(description = '') {

        const todo = new Todo(description);

        this._listTodos[todo.id] = todo;

    }
    deleteTodo() {

        const todo = new Todo();

        for (const i of _listTodos) {

            if (i === todo.description) {
                delete todo.description
            }

        }


    }

}
