import { app } from "./controller/app"
import UserController from './controller/user/UserController'
// import { login } from './controller/user/login'
import { createTask } from './controller/task/createTask'
import TaskControler, { getTaskById } from './controller/task/TaskController'
import UserBusiness from "./business/user/UserBusiness"
import TaskBusiness from "./business/task/TaskBusiness"
import TaskController from "./controller/task/TaskController"

const userController = new UserController(new UserBusiness())
const taskController = new TaskController(new TaskBusiness)

app.post('/user/signup', userController.signup)
// app.post('/user/login', login)

// app.put('/task', createTask)
app.get('/task/:id', taskController.getTaskById)

