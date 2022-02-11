import express, { Express } from 'express'
import cors from 'cors'
import knex from "knex";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import connection from "./connection";
// import { criaUsuario } from './endpoints/endpoints';
import { body, bodyTask } from './types';
import { endpoints } from './endpoints/endpoints';

endpoints()
