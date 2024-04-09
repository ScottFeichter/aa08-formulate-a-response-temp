const http = require('http');

const server = http.createServer((req, res) => {


  server.listen(port, () => console.log("Server is listenign on port ", port));

});

const port = 5001;
