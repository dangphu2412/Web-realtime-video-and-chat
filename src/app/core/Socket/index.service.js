import io from 'socket.io';

export class SocketService {
  static namspaces;

  static io;

  static init(server) {
    SocketService.namspaces = {};
    SocketService.io = io(server);
    SocketService.initNamespaces();
    SocketService.initConnection();
  }

  static initNamespaces() {
    SocketService.namspaces = {
      room: SocketService.io.of('room'),
    };
  }

  static initConnection() {
    SocketService.namspaces['room'].on('connection', SocketService.loadHandlerRoom);
  }

  /**
   *
   * @param {import('socket.io').Socket} socket
   */
  static loadHandlerRoom(socket) {
    socket.on('joinRoom', room => {
      socket.join(room);
    });
    socket.on('sendMess', msg => {
      socket.broadcast.emit('receiveMess', msg);
    });
  }
}
