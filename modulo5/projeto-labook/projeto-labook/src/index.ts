/**************************** IMPORTS ******************************/
import express, { Express, Request, Response } from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { v4 } from "uuid"
import Knex from "knex"
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
import generateDate from "./services/generateDate"

const userController = new UserController(new UserBusiness(
   new UserDatabase(),
   new HashManager(),
   new IdGenerator(),
   new Authenticator()
   ))

const postController = new PostController(new PostBusiness(
   new PostData(),
   new Authenticator(),
   new IdGenerator(),
   new generateDate()
   ))   

/**************************** ENDPOINTS ******************************/
app.post('/users/signup', userController.signup) 
app.post('/users/login', userController.login)

app.post('/posts/create', postController.createPost)
app.get('/posts/:id', postController.getPostById)



