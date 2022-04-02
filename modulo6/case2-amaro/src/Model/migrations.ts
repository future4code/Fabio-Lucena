import { BaseDatabase } from "../Data/BaseDatabase";

class Migrations extends BaseDatabase {
  public migrationsData = () => {
    this.getConnection()
      .raw(
        `
      CREATE TABLE IF NOT EXISTS Case2_Products(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        );

        CREATE TABLE IF NOT EXISTS Case2_Tags(
          product_id VARCHAR(255) PRIMARY KEY,
          FOREIGN KEY (product_id) REFERENCES Case2_Products(id),
          tags VARCHAR(255) NOT NULL
          );
   `
      )
      .then(console.log)
      .catch(console.log);
  };
}

const createTables = new Migrations()
createTables.migrationsData() 