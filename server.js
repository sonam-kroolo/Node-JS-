import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.write("12345566");

  // res.setHeader("content-type", "text/html");
  // res.statusCode = 404;

  // console.log(req.url);
  // console.log(req.method);

  //routes

  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "constent-type": "text/html" });
        res.end("<h1>HomePage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "constent-type": "text/html" });
        res.end("<h1>About page</h1>");
      } else {
        res.writeHead(404, { "constent-type": "text/html" });
        res.end("<h1>Not Found</h1>");
      }
    } else {
      throw new Error("Method not found");
    }
  } catch (error) {
    res.writeHead(500, { "constent-type": "text/plain" });
    res.end("Internal server error");
  }

  // res.writeHead(200, { "constent-type": "text/html" });
  // res.end("<h1>Heloo</h1>");

  // res.end(JSON.stringify({ message: "Server-error" }));
  // res.end("Helooo");
});

server.listen(PORT, () => {
  console.log(`server port ${PORT}`);
});
