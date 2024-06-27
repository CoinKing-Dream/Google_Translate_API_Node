const express = require('express'), 
    cors = require('cors'),
    http = require('http'),
    config = require("./config/config")

const port = 3000;
    

const app = express();
app.use(cors());
app.use("*", cors());

app.get('/translate', (req, res) => {
    
});

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`Server Started: ${port}`);
});

