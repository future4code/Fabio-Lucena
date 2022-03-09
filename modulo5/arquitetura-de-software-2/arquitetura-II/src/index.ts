import { app } from "./controller/app"
import UserController, { signup } from './controller/user/UserController'
import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import { getTaskById } from './controller/task/getTaskById'
import UserBusiness from "./business/user/UserBusiness"

const userController = new UserController(new UserBusiness())

app.post('/user/signup', signup)
app.post('/user/login', login)

app.put('/task', createTask)
app.get('/task/:id', getTaskById)

