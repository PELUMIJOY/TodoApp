import { Request, Response } from "express";
import Todo from '../model/todoModel'


export const createTodo = async (req:Request, res:Response) => {
    try {
        const {name, description, status} = req.body
       const todos = new Todo({
        name, description, status });
        const createdtodo = await todos.save()
        if(createdtodo){
            return res.status(200).json({
                message: 'Todo successfully created', todos
            })
        }else {
            return res.status(400).json({
                message: 'Todo not created'
            })
        }
    } catch (error) {
        return res.status(500).json({
            Error: 'Internal server error',
            route:"/create"
        })
        
    }

}