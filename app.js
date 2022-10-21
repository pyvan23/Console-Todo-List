import { menu, pause, readInput } from "./helpers/inquirer.js";
import { saveFile } from "./helpers/saveFile.js";
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
                console.log(todos.listArr)
                break;

            case '3':
            //list todos completed


        }

        if (op !== "0") await pause();
        // saveFile(todos.listArr)
    } while (op !== "0");
};

main();
