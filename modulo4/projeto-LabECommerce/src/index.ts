import knex from "knex";
import { app } from "./app"
import { createProducts } from "./endpoints/createProducts";
import { createUser } from "./endpoints/createUser";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";

app.post("/users", createUser)

app.get("/users", getAllUsers)

app.post("/products", createProducts)

app.get("/products", getAllProducts)