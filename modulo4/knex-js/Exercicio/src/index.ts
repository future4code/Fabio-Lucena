import express, {Express, Request, Response } from 'express';
import cors from 'cors';
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import connection from "./connection";

const app: Express = express();

app.use(express.json());
app.use(cors());


const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
    //   console.log(result)  
    //   console.log(result[0][0])  
      return result[0][0]
  }
  
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
    
    //   console.log(result[0][0])  
      return result[0][0]
  }

const getQuantityByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
    
      
      return result[0][0]
  }

const getQuantityByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
    `)
    
      
      return result[0][0]
  }
  


  
  
  // Assim a chamada funciona fora dos endpoints com .then()/.catch
//   getActorById("001")
//       .then(result => {
//         //   console.log(result)
//       })
//       .catch(err => {
//           console.log(err)
//       });
  
//   Assim a chamada funciona fora dos endpoints com await
//   (async () => {
//     console.log(await getQuantityByGender("male") )
//   })()
  


  
  app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      const ator = await getActorById(id)
        
      res.send(ator)
      res.end()
    
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
}) 

  app.get("/users", async (req: Request, res: Response) => {
    try {
      const name: any = req.query.name
  
      const ator = await getActorByName(name)
        
      res.send(ator)
      res.end()
    
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender: any = req.query.gender
  
      const ator = await getQuantityByGender(gender)
        
      res.send(ator)
      res.end()
    
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
}) 

  app.put("/actor/:id", async (req, res) => {
    try {
        
     await connection("Actor")
     .update({
        salary: req.body.salary
     })
     .where({id: req.params.id})

     const ator = await getActorById(req.params.id)
      res.send(ator)
      res.end()
    
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  })

  app.delete("/actor/:id", async (req, res) => {
    try {
        
     await connection("Actor")
     .delete()
     .where({id: req.params.id})

      res.end()
    
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 

  app.get("/actor/salaryAVG", async (req, res) => {
    try {
    const gender: any = req.query.gender
    
    const avgSalary = async(gender: string): Promise<any> =>{    
     const ator = await connection("Actor")
     .avg('salary')
     .from('Actor')
     .where({gender})
        console.log(ator[0])
        return ator[0]
    } 

    const avg = avgSalary(gender)
      
    res.send(avg)
    
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }) 


















const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});