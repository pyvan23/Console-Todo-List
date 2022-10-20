import { Todo } from "./todo.js";


export class Todos {

    _listTodos = {};

    get listArr() {

        const listArray = [];
        Object.keys(this._listTodos).forEach( key => {

            const todo = this._listTodos[key]
            listArray.push( todo )

        })

        return listArray;

    }


    constructor() {

        this._listTodos = {};
    }

    createTodo(description = '') {

        const todo = new Todo(description);

        this._listTodos[todo.id] = todo;

    }

}
