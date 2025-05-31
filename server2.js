import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "john Doe" },
  { id: 2, name: "john Clark" },
  { id: 3, name: "Mari Band" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else {
    res.setHeader("content-type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route Not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server port ${PORT}`);
});
