import { Request, Response } from "express";
import ProductBusiness from "../Business/ProductBusiness";
import ProductDatabase from "../Data/ProductDatabase";
import { productDTO } from "../Model/Product";

export default class ProductController {
    private productBusiness: ProductBusiness

    constructor(){
        this.productBusiness = new ProductBusiness(new ProductDatabase())
    }

    insertProduct = async (req: Request, res: Response) => {
        const input: productDTO = {
            name: req.body.name,
            tags: req.body.tags
        }
        try {
            const message = await this.productBusiness.insertProduct(input)

            res.status(200).send({ message })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }

    }
}