const {Schema, model}=require('mongoose')
const dateFormat=require('../utils/timeformat')

const ThoughtSchema= new Schema({
thoughttext:{
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
username:{
    type:String,
    require:true,
    ref:'User'
}
})

const Thought=model('Thought',ThoughtSchema)

module.export=Thought

