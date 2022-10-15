import { menu, pause } from "./helpers/inquirer.js";

console.clear();

const main = async () => {

    let op = '';

    do {

        op = await menu()
        console.log({ op })
        if(op !== '0') await pause()
      
        
    } while (op !== '0');

};

main();
