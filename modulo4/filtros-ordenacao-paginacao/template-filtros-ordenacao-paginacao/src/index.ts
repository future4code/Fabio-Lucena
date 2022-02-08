import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByType } from "./endpoints/getUsersByType";
import { orderUsersBy } from "./endpoints/orderUsersBy";

//Exercicio 2
app.get("/users", orderUsersBy)

// Exercício 1 a)
app.get("/users", getUsersByName)

//Original
app.get("/users", getAllUsers)

//Exercicio 1 b)
app.get("/users/:type", getUsersByType)
