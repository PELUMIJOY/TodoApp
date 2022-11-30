import { Request, Response } from "express";
import Todo from '../model/todoModel'


export const createTodo = async (req:Request, res:Response) => {
    try {
        // const {description, status} = req.body
       const todos = new Todo({name: req.body.name, description: req.body.description, status: req.body.status });
       
        const createdtodo = await todos.save()
        
        if(createdtodo){
            return res.status(200).json({
                message: 'Todo successfully created'
            })
        }else {
            return res.status(400).json({
                message: 'Error saving Todo'
            })
        }
    } catch (error) {
        return res.status(500).json({
            Error: 'Internal server error',
            route:"/create"
        })
        
    }
}
export const getTodo = async(req:Request, res:Response)=>{
    try {
        const getAllTodo = await Todo.find()
        if(getAllTodo){
            return res.status(200).json({message: "Data gotten successfully", getAllTodo})
        }else {
            return res.status(400).json({
                message: 'Error retriving Todo'
            })
        }

    } catch (error) {
        return res.status(500).json({
            Error: 'Internal server error',
            route:"/todo/"
        })
        
    }
}
export const getOne=async(req: Request, res: Response)=>{
    try {
        const id = req.params.id
        const todo = await Todo.findById(id)
        return res.status(200).json({
            message:"", todo
        })
    } catch (error) {
            res.status(500).json({
            Error: "Internal server error",
            route: "/todo/:id"
        });
    }
}
export const updateTodo=async(req: Request, res: Response)=>{
    const id = req.params.id
    const updated = {
        name:req.body.name,
        description: req.body.description,
        status: req.body.status
    }
    const update = await Todo.findByIdAndUpdate(id, {$set: updated})
    if(update){
        return res.status(200).json({
            message: "To-do updated successfully"
        })
    }else{
        return res.status(400).json({
            message: "To-do failed to saved"
        })
    }
}
export const deleteTodo=async(req: Request, res: Response)=>{
    const id = req.params.id as string
    const deleted = await Todo.findOneAndRemove({id})
    if(deleted){
        return res.status(200).json({
            message: "To-do deleted successfully"
        })
    }else{
        return res.status(400).json({
            message: "Your to-do failed to saved"
        })
    }
}