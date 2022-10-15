import { pause, showMenu } from "./helpers/messages.js";

console.clear();




const main = async () => {

    let op = '';

    do {
        op = await showMenu();
        console.log({ op })
        if (op !== '0') await pause();

    } while (op !== '0');

};

main();
