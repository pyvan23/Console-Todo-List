import { existsSync, readFileSync, writeFileSync } from "node:fs";




export const saveFile = (data) => {

    writeFileSync('./db/data.json', JSON.stringify(data));

}
export const readDb = () => {

    if (!existsSync('./db/data.json')) {
        return null
    }
    const info = readFileSync('./db/data.json', { encoding: 'utf-8' })
    //parse string
    const data = JSON.parse(info)
    // console.log(data)

    return data
}







