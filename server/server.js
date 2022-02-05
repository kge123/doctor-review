const express= require('express')
const {Apolloserver}=require('apollo-server-express')
const path=require('path')
//const {typeDefs, resolvers}= require('./schemas')
//const {authMiddleware}=require('./utils/auth')
const db =require('./config/connections')
const { Console } = require('console')

const port = process.env.PORT || 3001
const app= express()

const server= new Apolloserver({
    typeDefs,
    resolvers,
    context: authMiddleware,
})

server.applyMiddleware({app})
app.use(express.urlencoded({extended:false}))
app.use(express.json())

if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, '../client.build')))
}

app.get('*',(req,res)=>{
    res.sendfile(path.join(__dirname,'../client/build/index.html'))
})

db.once('open',()=>{
    app.listen(PORT,()=>{
        console.log(`API server running on port ${PORT}`)
        console.log(`use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
})