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
                })
                .into("Case2_Products")

            return input
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public insertTags = async (input: Product, tag: string): Promise<Product> => {
        try {
            await this.getConnection()
                .insert({
                    product_id: input.getId(),
                    tags: tag
                })
                .into("Case2_Tags")

            return input
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }



    public verifyProductByName = async (name: string): Promise<any> => {
        try {

            const result = await this.getConnection()
                .select("*")
                .from("Case2_Products")
                .where({ name })



            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public verifyProductById = async (id: string): Promise<any> => {
        try {

            const result = await this.getConnection().raw(`
                SELECT id, name, tags FROM Case2_Products JOIN Case2_Tags ON Case2_Products.id = Case2_Tags.product_id
                WHERE id = "${id}";
            `)

            let tags: string[] = []

            for (let i = 0; i <= result[0].length - 1; i++) {
                tags.push(result[0][i].tags)
            }

            const result2 = {
                id: result[0][0].id,
                name: result[0][0].name,
                tags: tags
            }

            return result2
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public verifyProductsByName = async (name: string): Promise<any> => {
        try {
            // console.log("cheguei no database")
            const result = await this.getConnection().raw(`
                SELECT id, name, tags FROM Case2_Products JOIN Case2_Tags ON Case2_Products.id = Case2_Tags.product_id
                WHERE name LIKE "%${name}%" ORDER BY id;
            `)
            
            let result3: any[] = []
            // let productId: string = ""
            let lastId: string = result[0][0].id
            // console.log(result[0])
            
            for(const id of result[0]){
                if(id.id !== lastId){
                    let product = await this.verifyProductById(lastId)
                    console.log("id", id)
                    result3.push(product)
                    
                    lastId = id.id
                }
            }
            result3.push(await this.verifyProductById(lastId))

            

          
            let tags: string[] = []

        

            return result3
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}