import fs from 'fs/promises';

/**readFile() -> promise version */
fs.readFile('./test.txt', 'utf8').then(data => console.log(data)).catch(err => console.log(err));

/**readFile() -> Async/Await */
const readFile = async() => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(err)
    }
}
readFile();

/**writeFile() write to a file.*/
const writeFile = async() => {
    try {
        await fs.appendFile('./test.txt', 'Hello! I am writing to this file.\n');
        console.log("File written to.");
    } catch (error) {
        console.log(err)
    }
}

writeFile();