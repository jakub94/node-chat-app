var socket = io();

socket.on('connect', function() {
  console.log("Connected to server");


  socket.emit('createMessage', {
    from: "jakub",
    text: "Hey its Andrew"
  });
});

socket.on('disconnect', function() {
  console.log("Disconncted from server");
});

socket.on('newMessage', function (message) {
  console.log("New message", message);  
});
