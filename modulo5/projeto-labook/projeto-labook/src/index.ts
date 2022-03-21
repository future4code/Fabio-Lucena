/**************************** IMPORTS ******************************/
import { app } from "./controller/app"
import UserController from "./controller/UserController"
import UserBusiness from "./business/UserBusiness"
import UserDatabase from "./data/UserDatabase"
import HashManager from "./services/HashManager"
import IdGenerator from "./services/IdGenerator"
import Authenticator from "./services/Authenticator"
import PostController from "./controller/PostController"
import PostBusiness from "./business/PostBusiness"
import PostData from "./data/PostData"

const userController = new UserController()

const postController = new PostController(new PostBusiness(
   new PostData(),
   new Authenticator(),
   new IdGenerator(),
))

/**************************** ENDPOINTS ******************************/
app.post('/users/signup', userController.signup)
app.post('/users/login', userController.login)

app.post('/posts/create', postController.createPost)
app.get('/posts/:id', postController.getPostById)



