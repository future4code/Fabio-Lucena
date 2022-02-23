import app from "./app"
import editUser from './endpoints/editUser'
import criaUsuario from "./endpoints/criaUsuario"
import login from "./endpoints/login"
import { pegaUsuario } from "./endpoints/pegaUsuario"

app.post('/user/signup', criaUsuario)
app.post('/user/login', login)
app.put('/user/edit/:id', editUser)
app.get('/user/profile', pegaUsuario)