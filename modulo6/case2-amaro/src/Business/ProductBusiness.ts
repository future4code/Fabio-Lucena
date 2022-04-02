import { CustomError } from "../error/CustomError";
import Product, { getProductDTO, productDTO } from "../Model/Product";
import IdGenerator from "../Services/IdGenerator";
import ProductRepository from "./ProductRepository";

export default class ProductBusiness {
    private productDatabase: ProductRepository
    private idGenerator: IdGenerator

    constructor(productImpelementation: ProductRepository) {
        this.productDatabase = productImpelementation
        this.idGenerator = new IdGenerator()
    }

    public insertProduct = async (input: productDTO): Promise<string> => {
        try {
            if (!input.name || !input.tags) {
                throw new CustomError(422, "Missing input")
            }

            const verifyName = await this.productDatabase.verifyProductByName(input.name)

            if (verifyName) {
                throw new CustomError(400, "Product name already exist")
            }

            const id: string = this.idGenerator.generate()

            const productInput = {
                id: id,
                name: input.name,
            }

            const newProduct = Product.toProductModel(productInput)

            await this.productDatabase.insertProduct(newProduct)

            for (let i = 0; i <= input.tags.length - 1; i++) {
                await this.productDatabase.insertTags(newProduct, input.tags[i])
            }

            let message = "Produto inserido"

            return message

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    getProduct = async (input: getProductDTO): Promise<any> => {
        try {
            if (!input.name && !input.tags && !input.id) {
                throw new CustomError(422, "Missing input")
            }
            if (!input.name && !input.tags && !!input.id) {
                const result = await this.productDatabase.verifyProductById(input.id)
                
                return result
            }

            if (!!input.name && !input.id && !input.tags) {
                const result = await this.productDatabase.verifyProductsByName(input.name)
                
                return result
            }

            if (!!input.tags && !input.id && !input.name) {
                const result = await this.productDatabase.verifyProductById(input.id)
                
                return result
            }
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}