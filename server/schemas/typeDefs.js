const { gql }=require('apollo-server-express')

const typeDefs=gql`

type Doctor{
    _id: ID
    name: String
    practice: String
    yearsofexperience: Int
    location: String
   
}

type User{
    _id:ID
    username: String
    email: String
}

type Thought{
    _id: ID
    thoughttext: String
    createat: String
    username: User
}
type Auth{
    token: ID
    user: User
}

type Query{
    
    
    doctor: [Doctor]
}

type Mutation{
    addUser(username :String!, email: String!, password: String!): Auth
    addthought(thoughttext:String!,username:String!):Doctor
    removethought(_id:ID!,thoughttext:String):Doctor
    login(email:String!, password: String!): Auth
}
`

module.exports=typeDefs