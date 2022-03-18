import { Request, Response } from "express";
import TaskBusiness from "../../business/task/TaskBusiness";
// import { getTaskByIdBusiness } from "../../business/task/TaskBusiness";




export default class TaskController{
   constructor(private taskBusiness: TaskBusiness){}

   getTaskById = async (
      req: Request,
      res: Response
   ) => {
      try {
   
         const { id } = req.params
   
         const task = this.taskBusiness.getTaskByIdBusiness(id)
   
         res.status(200).send(task)
   
      } catch (error: any) {
         res.status(400).send(error.message)
      }
   }

   createTask = async (
      req: Request,
      res: Response
   ) => {
      try {
   
         const { title, description, deadline, authorId } = req.body
   
         await this.taskBusiness.createTaskBusiness({
            title, description, deadline, authorId
         })
   
         res.status(201).end()
   
      } catch (error: any) {
   
         res.statusMessage = error.message
         res.status(500).end()
      }
   }
}
 