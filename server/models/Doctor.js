const { Schema, model}= require('mongoose')

const DoctorSchema= new Schema({
    name:{
        type:String,
        require:true,
        unique:true,
        trim: true
    },
    practice:{
        type:String,
        require:true,

    },
    yearsofexperience:{
        type:Number,
        require:true

    },
    location:{
        type:String,
        require: true


    }
})

const Doctor= model('Doctor', DoctorSchema)

module.export=Doctor