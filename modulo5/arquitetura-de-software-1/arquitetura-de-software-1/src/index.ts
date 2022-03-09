import { app } from "./controller/app"
import { UserControler } from "./controller/UserController"

// import { createTask } from './endpoints/createTask'
// import { getTaskById } from './endpoints/getTaskById'

const userController = new UserControler

app.post('/signup', userController.signup)
app.post('/login', userController.login)
app.get('/all', userController.getAllUsers)
app.delete('/:id', userController.deleteUser)

// app.put('/task', createTask)
// app.get('/task/:id', getTaskById)

