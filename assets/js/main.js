const socket = io('/');

console.log('main', socket);

socket.on('msgNotifi', ehNotification);

function sendMessage(msg) {
  console.log('I said ', msg);
  socket.emit('newMessage', { msg });
}

function ehNotification({ nickname, msg }) {
  console.log(`${nickname} send ${msg}`);
}
