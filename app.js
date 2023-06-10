// import required libraries
const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 3030;

// get timeStamps
function getTimeStamp() {
  var currentTime = new Date();

  // Set the time zone to IST
  currentTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // Extract hours and minutes from the current time
  var hours = currentTime.getHours().toString().padStart(2, '0');
  var minutes = currentTime.getMinutes().toString().padStart(2, '0');

  // Format the hours and minutes
  var formattedTime = hours + ':' + minutes;
  return formattedTime;
}

// Store messages in memory (can be replaced with a database)
const messages = [];

io.on('connection', (socket) => {
    console.log(`Client connected: ${socket.id}`);
  
    // Send all stored messages to the client
    socket.emit('message', messages);
  
    // Handle incoming messages from the client
    socket.on('message', (message) => {
      const { name, input } = message;
      messages.push({ clientId: socket.id, name: name, message: input, timeStamp: getTimeStamp() });
      io.emit('message', messages);

      // console.log(messages);
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      messages.splice(0);
      console.log(`Client disconnected: ${socket.id}`);
    });
  });

// Start the server
httpServer.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
