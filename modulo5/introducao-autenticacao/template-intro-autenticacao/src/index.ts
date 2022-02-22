import app from "./app"
import editUser from './endpoints/editUser'
import criaUsuario from "./endpoints/criaUsuario"

app.post('/user/signup', criaUsuario)
app.put('/user/edit/:id', editUser)