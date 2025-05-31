import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.write("12345566");

  // res.setHeader("content-type", "text/html");
  // res.statusCode = 404;
  console.log(req.url);
  console.log(req.method);

  res.writeHead(200, { "constent-type": "text/html" });
  // res.end(JSON.stringify({ message: "Server-error" }));
  res.end("<h1>Heloo</h1>");
  // res.end("Helooo");
});

server.listen(PORT, () => {
  console.log(`server port ${PORT}`);
});
