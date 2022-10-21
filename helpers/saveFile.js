import { writeFileSync } from "node:fs";




export const saveFile = ( data ) => {

    writeFileSync('./db/data.json', JSON.stringify(data));

}







