import http from 'http'

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(500, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message: "Server Error!"}));
    res.end();
});

server.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)});