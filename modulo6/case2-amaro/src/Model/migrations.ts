import { BaseDatabase } from "../Data/BaseDatabase";

class Migrations extends BaseDatabase {
  public migrationsData = () => {
    this.getConnection()
      .raw(
        `
      CREATE TABLE IF NOT EXISTS Case2_Products(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NOT NULL,
        );
   `
      )
      .then(console.log)
      .catch(console.log);
  };
}

const createTables = new Migrations()
createTables.migrationsData() 