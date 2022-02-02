### Exercício 1
a) A resposta é devolvida como um vetor com outros vetores de informações dentro, sendo assim é necessário pegar somente as informações necessárias desta resposta.

b)
### const getActorByName = async (name: string): Promise<any> => {
###    const result = await connection.raw(`
###      SELECT * FROM Actor WHERE name = '${name}'
###    `)
###      console.log(result[0][0])  
###      return result[0][0]
###  }

c) 
### const getQuantityByGender = async (gender: string): Promise<any> => {
###    const result = await connection.raw(`
###    SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
###    `)
###      return result[0][0]
###  }

### Exercício 2
a)
###  app.put("/actor/:id", async (req, res) => {
###    try {
        
###     await connection("Actor")
###     .update({
###        salary: req.body.salary
###     })
###     .where({id: req.params.id})

###     const ator = await getActorById(req.params.id)
###      res.send(ator)
###      res.end()
    
###    } catch (error: any) {
###          console.log(error.message)
###      res.status(500).send("Unexpected error")
###    }
###  }) 

b)
###  app.delete("/actor/:id", async (req, res) => {
###    try {
        
###     await connection("Actor")
###     .delete()
###     .where({id: req.params.id})

###      res.end()
    
###    } catch (error: any) {
###          console.log(error.message)
###      res.status(500).send("Unexpected error")
###    }
###  }) 

c)
###  const avgSalary = async(gender: string): Promise<any> =>{    
###     const ator = await connection("Actor")
###     .avg('salary')
###     .from('Actor')
###     .where({gender})
###        console.log(ator[0])
###        return ator[0]
###    }

### Exercício 3
a)
### app.get("/actor/:id", async (req: Request, res: Response) => {
###    try {
###      const id = req.params.id
###  
###      const ator = await getActorById(id)
###        
###      res.send(ator)
###      res.end()
###    
###    } catch (error: any) {
###          console.log(error.message)
###      res.status(500).send("Unexpected error")
###    }
### }) 

b)
###   app.get("/actor", async (req: Request, res: Response) => {
###     try {
###       const gender: any = req.query.gender
###   
###       const ator = await getQuantityByGender(gender)
###         
###       res.send(ator)
###       res.end()
###     
###     } catch (error: any) {
###           console.log(error.message)
###       res.status(500).send("Unexpected error")
###     }
### }) 

### Exercicio 4
a)
### app.put("/actor/:id", async (req, res) => {
###    try {
###        
###     await connection("Actor")
###     .update({
###        salary: req.body.salary
###     })
###     .where({id: req.params.id})
###
###     const ator = await getActorById(req.params.id)
###      res.send(ator)
###      res.end()
###    
###    } catch (error: any) {
###          console.log(error.message)
###      res.status(500).send("Unexpected error")
###    }
###  })

b)
### app.delete("/actor/:id", async (req, res) => {
###    try {
        
###     await connection("Actor")
###     .delete()
###     .where({id: req.params.id})

###      res.end()
    
###    } catch (error: any) {
###          console.log(error.message)
###      res.status(500).send("Unexpected error")
###    }
###  }) 

