import { CustomError } from "../error/CustomError";
import Product, { productDTO } from "../Model/Product";
import IdGenerator from "../Services/IdGenerator";
import ProductRepository from "./ProductRepository";

export default class ProductBusiness{
    private productDatabase: ProductRepository
    private idGenerator: IdGenerator

    constructor(productImpelemntation: ProductRepository){
        this.productDatabase = productImpelemntation
        this.idGenerator = new IdGenerator()
    }

    public insertProduct = async(input: productDTO): Promise<string> =>{
        try {
            if(!input.name|| !input.tags){
                throw new CustomError(422, "Missing input")
            }

            const verifyName = await this.productDatabase.verifyProductByName(input.name)

            if(verifyName){
                throw new CustomError(400, "Product name already exist")
            }

            const id: string = this.idGenerator.generate()

            const productInput = {
                id: id,
                name: input.name,
                tags: input.tags
            }

            const newProduct = Product.toProductModel(productInput)

            await this.productDatabase.insertProduct(newProduct)

            let message = "Produto inserido"

            return message

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}