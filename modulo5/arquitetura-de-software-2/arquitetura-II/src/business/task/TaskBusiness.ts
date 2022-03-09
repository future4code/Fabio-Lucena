import TaskData from "../../data/task/TaskData"
import { taskData } from "../../model/task"
import { generateId } from "../../services/idGenerator"

const taskDB = new TaskData

export default class TaskBusiness{
   getTaskByIdBusiness = async (
      id: string
   ) => {
      const result = await taskDB.selectTaskById(id)
   
      if (!result) {
         throw new Error("Tarefa não encontrada")
      }
   
      const taskWithUserInfo = {
         id: result.id,
         title: result.title,
         description: result.description,
         deadline: result.deadline,
         authorId: result.authorId,
      }
   
      return taskWithUserInfo
   }

   createTaskBusiness = async (
      taskData: taskData
   ) => {
   
      if (
         !taskData.title ||
         !taskData.description ||
         !taskData.deadline ||
         !taskData.authorId
      ) {
         throw new Error('"title", "description", "deadline" e "authorId" são obrigatórios')
      }
   
      const id: string = generateId()
   
      await taskDB.insertTask({
         id,
         ...taskData
      })
   }
}