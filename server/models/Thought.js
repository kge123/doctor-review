const {Schema, model}=require('mongoose')
const dateFormat=require('../utils/timeformat')

const ThoughtSchema= new Schema({
thoughtText:{
    type:String,
    require:true,
    minlenght:1,
    maxlenght:280
},
createat:{
    type:Date,
    default:()=>Date.now(),
    get:(TimeStamp)=>dateFormat(TimeStamp)
},
user:{
    type: Schema.Types.ObjectId,
    require: false,
    ref:'User'
}
})

const Thought=model('Thought',ThoughtSchema)

module.exports=Thought

