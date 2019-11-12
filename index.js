const express = require('express')
const https = require('https')
const fs = require('fs')
const app = express()

// This line is from the Node.js HTTPS documentation.
const options = {
  key: fs.readFileSync('./privatekey.pem').toString(),
  cert: fs.readFileSync('./certificate.pem').toString()
}

// Create an HTTPS service.
const server = https.createServer(options, app).listen(3000, '0.0.0.0', listen)
const ip = require('ip').address()


// This callback just tells us that the server has started
function listen() {
  const port = server.address().port;
  console.log('App listening at https://' + ip + ':' + port);
} 

//serve files in the client folder
app.use(express.static('client'))

// WebSockets
const io = require('socket.io').listen(server);
// This is run for each individual user that connects
io.sockets.on('connection',
    // We are given a websocket object in our function
    socket => {
        console.log('client connected', socket.id)
    }
)

