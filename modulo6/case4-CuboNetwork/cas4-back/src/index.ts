import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { participantRouter } from "./Routes/ParticipantRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/participant", participantRouter)

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });