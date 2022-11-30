import express from 'express'
import logger from 'morgan'
import Router from './routes/todoRoutes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();


mongoose.connect(process.env.DATABASE_URL! , () =>{
    console.log('Database connected successfully')
})
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use(logger('dev'))
app.use('/todo', Router)


const port = 4000;
app.listen(port, () =>{
    console.log(`server running at http://localhost:${port}`)
})