require('dotenv/config');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const Database = require('./database')
const { ApolloServer } = require('apollo-server');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
      database: new Database(),
    })
  });
  
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  }).catch(error => {
    console.log('🚀 Server error ', error);
  });