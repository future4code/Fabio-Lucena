export default class Product{
    
    constructor(
        private id: string,
        private name: string,
        private tags: string[]
    ){}

    public getId(){
        return this.id
    } 

    public getName(){
        return this.name
    }

    public getTags(){
        return this.tags
    }

    public static toProductModel(product: any): Product{
        return new Product(product.id, product.name, product.tags)
    }

}

export type productDTO = {
    name: string,
    tags: string[]
}

export type getProductDTO = {
    id: string,
    name: string,
    tags: string
}