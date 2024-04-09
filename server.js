const http = require('http');

const server = http.createServer((req, res) => {

  // console.log("THE REQ: ", req);

  const responseBody = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>`;

  res.status = 200;
  res.setHeader(`Content-Type`, `text/html`);
  res.write(responseBody);

  return res.end(this is the end);
});


const port = 5001;

server.listen(port, () => console.log("Server is listenign on port ", port));
