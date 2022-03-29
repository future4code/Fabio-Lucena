import { BaseDatabase } from "./data/BaseDatabase";

class Migrations extends BaseDatabase {
  public migrationsData = () => {
    this.getConnection()
      .raw(
        `
      CREATE TABLE IF NOT EXISTS Case1_Competitions(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        modality VARCHAR(255) NOT NULL,
        status VARCHAR(255)NOT NULL DEFAULT ("TRUE")
        );

      CREATE TABLE IF NOT EXISTS Case1_Dash(
        id VARCHAR(255) PRIMARY KEY,
        athlete VARCHAR(255) NOT NULL,
        time float NOT NULL,
        competition_id VARCHAR(255)NOT NULL,
        FOREIGN KEY (competition_id) REFERENCES Case1_Competitions(id)
        );

      CREATE TABLE IF NOT EXISTS Case1_Javelin(
        id VARCHAR(255) PRIMARY KEY,
        athlete VARCHAR(255) NOT NULL,
        throw FLOAT NOT NULL,
        competition_id VARCHAR(255)NOT NULL,
        FOREIGN KEY (competition_id) REFERENCES Case1_Competitions(id)
        );
   `
      )
      .then(console.log)
      .catch(console.log);
  };
}

const createTables = new Migrations()
createTables.migrationsData()