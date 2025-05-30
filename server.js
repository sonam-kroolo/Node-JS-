import http from "http";
const PORT = 5000;

const server = http.createServer((req, res) => {
  res.write("1234567");
});

server.listen(PORT, () => {
  console.log(`server port ${PORT}`);
});
