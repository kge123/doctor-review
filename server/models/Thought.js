const {Schema, model}=require('mongoose')

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
    get:(TimeStamp)=>TimeStamp(TimeStamp)
},
username:{
    type:String,
    require:true,
    ref:'User'
}
})

const Thought=mongoose.model('Thought',ThoughtSchema)

module.export=Thought

