// filepath: /Users/akshat/Desktop/Maze_solver-master/server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname)); // Serve static files from the root directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});