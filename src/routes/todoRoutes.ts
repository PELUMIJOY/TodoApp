import express  from 'express'
import { createTodo, deleteTodo, getTodo, updateTodo, getOne } from '../controller/todoController';

const router = express.Router()

router.post('/create', createTodo)
router.get('/todo', getTodo)
router.get('/todo/:id', getOne)
router.patch('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)


export default router
