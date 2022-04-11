import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import { competitionRouter } from "./routes/CompetitionRouter";
import { javelinRouter } from "./routes/JavelinRouter";
import { meterDashRouter } from "./routes/MeterDashRouter";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/competition", competitionRouter);
app.use("/javelinThrow", javelinRouter)
app.use("/meterDash", meterDashRouter)

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});