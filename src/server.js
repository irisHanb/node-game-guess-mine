import express from 'express';
import { render } from 'pug';
import { join } from 'path';
import socketIO from 'socket.io';
import logger from 'morgan';

const PORT = 4000;
const app = express();
app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'static')));
app.use(logger('dev'));

app.get('/', (req, res) => res.render('home'));

const handleListening = () => {
  console.log(`Listening http://localhost:${PORT}`);
};

var server = app.listen(PORT, handleListening);
var io = socketIO.listen(server);
io.on('connection', socket => {
  setTimeout(() => {
    socket.broadcast.emit('hello');
  }, 4000);
});
