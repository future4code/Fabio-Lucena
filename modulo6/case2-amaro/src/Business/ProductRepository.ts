import Product from "../Model/Product";

export default interface ProductRepository{
    insertProduct (input: Product): Promise<Product>
    insertTags (input: Product, tag: string): Promise<Product>
    verifyProductByName (name: string): Promise<any>
    verifyProductById (id: string): Promise<any>
    verifyProductsByName (id: string): Promise<any>
}