const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Normalize URL path
  const urlPath = req.url.split('?')[0];

  if (req.method === 'GET' && (urlPath === '/' || urlPath === '/calculator.html')) {
    const filePath = path.join(__dirname, 'calculator.html');
    
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Server Error: Could not load calculator file.');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404 Not Found</h1><p>The requested route does not exist on this server.</p>');
  }
});

server.listen(PORT, () => {
  console.log(`Calculator server running at http://localhost:${PORT}`);
});
