import mongoose,{Schema}from 'mongoose'

interface todoInstance{
// _id:string;
    name:string;
    description:string;
    status:string
}
const todoSchema =new Schema({
    name:{type:String},
    description:{type:String},
    status:{type:String}

},{
    timestamps:true
})
const Todo = mongoose.model<todoInstance>("Todo", todoSchema)
export default Todo