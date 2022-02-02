const http = require("http");
http
  .createServer((req, res) => {
    res.write("Server is running");
    res.end();
  })
  .listen(2022);
