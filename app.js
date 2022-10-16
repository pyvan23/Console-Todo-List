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
                const desc  = await readInput('Description: ');
                console.log(desc)
                
                break;

            case '2':
                //List todos
                console.log(todos._listTodos)
                break;
        
        }

        // if (op !== "0") await pause();

    } while (op !== "0");
};

main();
