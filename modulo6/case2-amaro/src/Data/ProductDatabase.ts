import ProductRepository from "../Business/ProductRepository";
import Product from "../Model/Product";
import { BaseDatabase } from "./BaseDatabase";

export default class ProductDatabase extends BaseDatabase implements ProductRepository {
    public insertProduct = async (input: Product): Promise<Product> => {
        try {
            await this.getConnection()
                .insert({
                    id: input.getId(),
                    name: input.getName(),
                    tags: input.getTags()
                })
                .into("Case2_Products")

            return input
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public verifyProductByName = async (name: string): Promise<Product> => {
        try {
            const result = await this.getConnection()
                .select("*")
                .from("Case2_Products")
                .where({name})

            const result2 = Product.toProductModel(result[0])    

            return result2
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }


}