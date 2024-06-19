import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Patrick Swayze" }
];

const server = createServer((req, res) => {
    if (req.url === "/api/users" && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end('\n');
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        const id = parseInt(req.url.split('/')[3]);
        const user = users.find(user => user.id === id);
        res.setHeader('Content-Type', 'application/json');
        if (user) {
            res.write(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.write(JSON.stringify({message: "User not found"}));
        }
        res.end('\n');
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "Route not found!" }));
        res.end('\n');
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})