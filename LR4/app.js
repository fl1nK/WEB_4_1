/* eslint-disable no-undef */
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(__dirname + '/assets'));

io.on('connection', (socket) => {
  socket.on('chat message', (data) => {
    io.emit('chat message', {
      message: data.message,
      name: data.name
    })
  })
})

http.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
