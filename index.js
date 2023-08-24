const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers')

const schemaPath = './schema/index.graphql'
const server = new ApolloServer({

    /* 
        npm i -s graphql-import
        importe da pasta schema/index, e utiliza no typeDef
    */

    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executanto em ${url}`)
})