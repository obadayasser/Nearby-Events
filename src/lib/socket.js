
import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
  transports: ["websocket"],
  reconnection: true,
});

socket.on("connect", () => {
  console.log(" Connected to Socket.IO server");
});

socket.on("new-event", (data) => {
  console.log(" Received new event via socket:", data);
});

export default socket;
