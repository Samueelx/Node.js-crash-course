import url from "url";
import path from "path";

const filepath = './dir1/dir2/text.txt';

/**basename() -> return the last portion of a path */
console.log(path.basename(filepath))
/**dirname() -> Get the directory name */
console.log(path.dirname(filepath));
/**extname() -> extention name of the file */
console.log(path.extname(filepath));
/**parse() */
console.log(path.parse(filepath));

/**join() -> creates a filepath based on the arguments provided. */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath2 = path.join(__dirname, 'dir1', 'dir2', 'text.txt');
console.log(filepath2);