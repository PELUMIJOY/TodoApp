import express from 'express'
const app = express();
import logger from 'morgan'
import Router from './routes/todoRoutes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
app. use(express.json)
mongoose.connect(process.env.DATABASE_URL! , () =>{
    console.log('Database connected successfully')
})
app.use(logger('start'))
app.use('/create', Router)


const port = 4000;
app.listen(port, () =>{
    console.log(`server running at http://localhost:${port}`)
})