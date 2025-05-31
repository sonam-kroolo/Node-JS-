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
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.setHeader("content-type", "application/json");
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.setHeader("content-type", "application/json");
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User Not found" }));
      res.end();
    }

    // res.setHeader("content-type", "application/json");
    // res.write(JSON.stringify({ id: 1, name: "john Doe" }));
    // res.end();

    // res.write(JSON.stringify(users));
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
