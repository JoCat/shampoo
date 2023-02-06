import { Server } from "aurora-rpc-server";
import { server } from "./http/server";

const debug = true; // Set to true to enable debug output

export const wsServer = new Server({ server }, debug);

server.listen(8000, () => {
  console.log("Server listening on: http://localhost:8000");
});
