import color from "colors";
import { resolve } from "path";
import readline from "readline";

export const showMenu = () => {
    return new Promise((resolve) => {
        console.log("==========================".green);
        console.log("          Menu            ".green);
        console.log("==========================\n".green);

        console.log("1. Create todo");
        console.log("2. List todos");
        console.log("3. List todos completed");
        console.log("4. List todos pending");
        console.log("5. Complete todos(s)");
        console.log("6. Delete todo");
        console.log("7. Exit\n");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Please select one option to continue...\n", (op) => {
            rl.close();
            resolve(op)
        });
    });
};
export const pause = () => {
    return new Promise((resolve) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question("Please press ENTER to continue\n", (op) => {
            rl.close();
            resolve()
        });
    })
};
