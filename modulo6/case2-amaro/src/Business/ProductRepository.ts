import Product from "../Model/Product";

export default interface ProductRepository{
    insertProduct (input: Product): Promise<Product>
    insertTags (input: Product, tag: string): Promise<Product>
    verifyProductByName (name: string): Promise<any>
    getProductById (id: string): Promise<any>
    getProductsByName (name: string): Promise<any>
    getProductsByTags (tags: string): Promise<any>
}