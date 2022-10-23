import { menu, pause, readInput } from "./helpers/inquirer.js";
import { readDb, saveFile } from "./helpers/saveFile.js";
import { Todos } from "./models/todos.js";

console.clear();

const main = async () => {

    let op = "";
    const todos = new Todos();

    const todosDb = readDb()
    if (todosDb) {
        //establecer todos
        todos.loadTodosFromArray(todosDb)
    }

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
                // console.log(todos.listArr)
                todos.listTodosCompleted()
                

                break;

            case '3':
            //list todos completed


        }
        saveFile(todos.listArr)

        await pause();

    } while (op !== "0");
};

main();
