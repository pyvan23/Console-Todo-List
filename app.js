import { menu, pause, readInput } from "./helpers/inquirer.js";
import { Todos } from "./models/todos.js";

console.clear();

const main = async () => {

    let op = "";
    const todos = new Todos();

    do {

        op = await menu();

        switch (op) {

            case '1':
                //create todo
                const desc = await readInput('Description: ');
                todos.createTodo(desc);
                break;

            case '2':
                //List todos
                console.log(todos._listTodos)
                break;

            case '3':
                //list todos completed

            case '6':
                //delete todo
                todos.deleteTodo()
                break

        }

         if (op !== "0") await pause();

    } while (op !== "0");
};

main();
