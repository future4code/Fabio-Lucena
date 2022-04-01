import Product from "../Model/Product";

export default interface ProductRepository{
    insertProduct (input: Product): Promise<Product>
    verifyProductByName (name: string): Promise<Product>
}