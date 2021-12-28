const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');
const fetchCrypto = require('./fetchCrypto');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello'));

io.on('connection', socket => {
    console.log('Connected');
    setInterval(async () => {
        socket.emit('crypto', await fetchCrypto.pushUpdates())
    }, 10000);
});

const PORT = 5000 || process.env.PORT;
server.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));