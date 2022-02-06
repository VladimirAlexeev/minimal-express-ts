import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './graphql';

const app = express();
const PORT = 9000;

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({app, path: "/api"});
}

startServer().then(() => {});

app.listen(PORT);

console.log(`[app]: Is running on http://localhost:${PORT}`);