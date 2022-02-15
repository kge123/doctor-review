const { gql }=require('apollo-server-express')

const typeDefs=gql`

type Doctor{
    _id: ID
    name: String
    practice: String
    yearsofexperience: Int
    location: String    
    reviews: [Thought]
}

type User{
    _id:ID
    username: String
    email: String
}

type Thought{
    _id: ID
    thoughtText: String
    createat: String
    user: User
    doctorId: String
    
}
type Auth{
    token: ID
    user: User
}

type Query{
    singledoctor(_id:ID):Doctor
    
    
    doctor: [Doctor]
}

type Mutation{
    addUser(username :String!, email: String!, password: String!): Auth
    addThought(thoughtText:String!, doctorId:ID!): Thought
    login(email:String!, password: String!): Auth
}
`

module.exports=typeDefs