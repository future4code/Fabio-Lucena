import { app } from "./app";
import { saveAdress } from "./endpoints/saveAddress";

import { getAddressInfo } from "./services/getAddress";


// app.get("/user/:cep", getAddressInfo)

app.post("/user/address", saveAdress)