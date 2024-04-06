const express = require('express');
const http = require('http');
const mysql = require('mysql2');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const WebSocket = require('ws');

dotenv.config();


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const profileRoutes = require('./routes/profile');
const recipeRoutes = require('./routes/recipe');

app.use('/profile', profileRoutes);
app.use('/recipe', recipeRoutes);


const server = http.createServer(app);

const wss = new WebSocket.Server({ server });


wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);

    });

    ws.on('close', () => {
        console.log('WebSocket disconnected');

    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
