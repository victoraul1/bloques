const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const fs = require('fs');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Path to the JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Load initial data from JSON file
let currentData = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

// When a client connects, send them the current data
io.on('connection', (socket) => {
    console.log('New client connected');
    socket.emit('updateDisplay', currentData);  // Send the current data to the client

    // Handle incoming update requests
    socket.on('update', (data) => {
        // Update the current data with the new fields received
        currentData = { ...currentData, ...data };

        // Write the updated data to the JSON file
        fs.writeFileSync(dataFilePath, JSON.stringify(currentData, null, 2));

        // Broadcast the updated data to all clients
        io.emit('updateDisplay', currentData);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});
