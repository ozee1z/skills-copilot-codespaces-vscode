// Create web server
const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Hello World');
    });
    server.listen(3000);
    console.log('Server listening on port 3000');
    // Create WebSocket server
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ server });
    // Broadcast to all.
    wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
    client.send(data);
    }   
    }
    );
    }
    // Listen for connections and create callbacks
    wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    }
    );
    ws.send('something');
    }
    );