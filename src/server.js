
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    const readStream = fs.createReadStream('index.html', 'utf-8');
    readStream.pipe(res)
});

server.listen(7201, () => {
    console.log('Server running on port http://localhost:7201')
});
