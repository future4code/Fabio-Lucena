import express from "express"
import ProductController from "../Controller/ProductController"

export const productRouter = express.Router()

const productController = new ProductController()

productRouter.post("/insert", productController.insertProduct)