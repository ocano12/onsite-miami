import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typeDefs';
import resolvers from './resolvers';
import User from './models/user';

const port = process.env.port || 4000;

dotenv.config();

mongoose.connect(process.env.uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => console.log('DB connected'),
  (err) => console.log(err)
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
  },
  playground: {
    endpoint: 'http://localhost:4000/graphql',
  },
});

const app = express();

server.applyMiddleware({
  app,
});

app.listen(process.env.port, () => console.log(`Server listening ${process.env.port}`));
