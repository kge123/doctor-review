const db =require('../config/connections')
const {Doctor,Thought}=require('../models')

const doctordata=require('./Doctordata.json')

db.once('open',async()=>{
    try{
        await Doctor.create(doctordata)
    

        //create thought for model
    
        
        console.log('all inserted')
        process.exit(0)
    
    }
    catch(err){
        throw err
    }

})