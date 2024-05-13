const { createServer } = require('node:http');
const mysql = require('mysql2/promise');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(async (req, res) => {


  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Credentials", false);
  res.setHeader('Access-Control-Allow-Headers', "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
  res.setHeader('cache-control', 'no-cache');
  console.log(req.url, req.method)
  if (req.url === "/" && req.method === "GET") {
    const connection = await mysql.createConnection({
      host: 'db',
      user: 'root',
      password: 'mysql',
      database: 'node_db'
    });
    const [results, fields] = await connection.query('SELECT id, comment FROM comments')
    connection.end();
    res.end(JSON.stringify(results));
    res.statusCode = 200;
  }
  else if (req.url === "/add" && req.method === "POST") {
    let data = "";
    req.on('data', function(chunk) {data += chunk})
      .on('end', async function() {
        console.log(data);
        const {comment} = JSON.parse(data)
        const connection = await mysql.createConnection({
          host: 'db',
          user: 'root',
          password: 'mysql',
          database: 'node_db'
        });
        await connection.query('INSERT INTO comments (comment) VALUES (?)', [comment]);
        connection.end();
        res.statusCode = 200;
        res.end();
      })
  } else if (req.url === "/add" && req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not Found" }));
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
