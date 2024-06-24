import url from "url";

const urlString = 'https://www.google.com/search?q=hello+world';

/**URL Object */
const urlObject = new URL(urlString)
console.log(urlObject);

/**format() -> Converts a url object into a string.*/
console.log(url.format(urlObject));
/**import.meta.url -> gives you the file url */
console.log(import.meta.url);
/**fileURLToPath() -> The path to a file */
console.log(url.fileURLToPath(import.meta.url));
/**To get the query params */
const params = new URLSearchParams(urlObject.search);
console.log(params);
console.log(urlObject.searchParams);
console.log(params.get('q'));
params.append('limit', '5')
console.log(urlObject.searchParams);
console.log(params)