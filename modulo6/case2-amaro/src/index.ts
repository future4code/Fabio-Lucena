import dotenv from "dotenv"
import  express, { Express } from "express"
import { AddressInfo } from "net"
import cors from "cors"
import { productRouter } from "./Routes/productRouter"

dotenv.config()

const app: Express = express();

app.use(express.json());
app.use(cors());

app.use("/product", productRouter)

const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  }); 