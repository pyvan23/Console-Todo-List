import { Todo } from "./todo.js";
import Color from "colors";

export class Todos {
    _listTodos = {};

    get listArr() {
        const listArray = [];
        Object.keys(this._listTodos).forEach((key) => {
            const todo = this._listTodos[key];
            listArray.push(todo);
        });

        return listArray;
    }

    constructor() {
        this._listTodos = {};
    }

    deleteTodo(id = '') {

        if (this._listTodos[id]) {
            delete this._listTodos[id]

        }
    }

    loadTodosFromArray(todos = []) {
        todos.forEach((todo) => {
            this._listTodos[todo.id] = todo;
        });
    }

    createTodo(description = "") {
        const todo = new Todo(description);

        this._listTodos[todo.id] = todo;
    }

    listTodosCompleted() {
        console.log();

        this.listArr.forEach((todo, index) => {
            const idx = `${index + 1}`.green;
            const { description, createdDate } = todo;
            const state = createdDate === null ? "pending".red : "completed".green;
            console.log(`${idx} ${description} ${state}`);
        });

        ////////////////////////////////////////////////////////////
        // for (let index = 0; index < this.listArr.length; index++) {

        //     console.log(`${index + 1}`.green  + '.'.green + '' + `${this.listArr[index].description}` + ' ' + `${'completed'.green} | ${'pending'.red}`)
        // }
        //////////////////////////////////////////////
        // this.listArr.map((item,index)=>{

        //     if(item.createdDate === null){

        //       return  console.log(`${index +1}`.red +'.'.red + `${item.description}`+ ' ' + 'pending'.red )
        //     }
        //     return console.log(`${index +1}`.green +'.'.green + `${item.description}`+ ' ' + 'completed'.green )
        // })
    }

    listCompletedPending(completed = true) {
        // const state = completed ? 'completed' : 'pending'
        console.log();
        let index = 0;
        this.listArr.forEach((todo) => {

            const { description, createdDate } = todo;
            const state = createdDate === null ? "pending".red : "completed".green

            if (completed) {
                ///show completed
                if (createdDate) {
                    index += 1;
                    console.log(
                        `${index.toString().green} ${description} ${createdDate.toString().green
                        }`
                    );
                }
            } else {
                //show pending
                if (!createdDate) {
                    index += 1;
                    console.log(`${index.toString().green} ${description} ${state}`);
                }
            }
        });
    }
}
