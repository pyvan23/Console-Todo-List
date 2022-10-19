import { Todo } from "./todo.js";




export class Todos {

    _listTodos = { };

    get listArr(){
        const listA = [];
        Object.keys(this._listTodos).forEach(key=>{
            
            const todo = this._listTodos[key]
            console.log(key)
            listA.push(todo)
        })
        return listA;

    }


    constructor() {

        this._listTodos = {};
    }

    createTodo ( description = '' ) {

        const todo = new Todo( description );

        this._listTodos[todo.id] = todo;

    }

}
