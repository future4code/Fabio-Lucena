import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersPage } from "./endpoints/getAllUsersPage";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByType } from "./endpoints/getUsersByType";
import { orderUsersBy } from "./endpoints/orderUsersBy";
import { getUsers } from "./endpoints/getUsers"

//Original
// app.get("/users", getAllUsers)

// Exercício 1 a)
// app.get("/users", getUsersByName)

//Exercicio 1 b)
// app.get("/users/:type", getUsersByType)

//Exercicio 2
// app.get("/users", orderUsersBy)

//Exercicio 3
// app.get("/users", getAllUsersPage)

//Exercicio 4
app.get("/user", getUsers)