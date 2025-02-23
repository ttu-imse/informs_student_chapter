// web server
const express = require("express");
const app = express();
const http = require("http").createServer(app);

// directories
app.use(express.static(".", {}));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// start server
http.listen(3000, () => {
    console.log('listening on *:3000');
});