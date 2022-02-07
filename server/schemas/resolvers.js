const {AuthenticationError}=require('apollo-server-express')
const {Doctor, User, Thought}=require('../models')
const {signToken}=require('../utils/auth')

const resolvers={
    query:{
       doctors: async()=>{
           return await Doctor.findone(_id).populate('thoughts')
       },
      
    },

    mutations:{
        adduser:async(parent,{firstname,lastname,email,password})=>{
            return User.create({firstname,lastname,email,password})
        },
        addthought:async(parent,{thoughttext,username})=>{
            return Thought.create({thoughttext,username})
        },
        removethought: async(parent,{_id,thoughttext})=>{
            return Thought.findOneAndUpdate(
                {_id:ID},
                {$pull:{thoughttext:thoughttext}},
                {new:true}
            )
        }
    }
}

module.exports=resolvers