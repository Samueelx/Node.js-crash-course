import http from 'http'

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        if (req.method === "GET") {
            if (req.url === "/") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>Homepage</h1>');
                res.end('\n');
            } else if (req.url === "/about") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write('<h1>About Page</h1>');
                res.end('\n');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>Not Found</h1>');
                res.end('\n');
            }
        } else {
            throw new Error("Method not allowed")
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.write('Server Error');
        res.end('\n');
    }
});

server.listen(PORT, () => { console.log(`Listening on port: ${PORT}`) });