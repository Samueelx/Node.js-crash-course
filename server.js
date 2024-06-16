import http from 'http'

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({message: "Server Error!"}));
    res.end();
});

server.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)});