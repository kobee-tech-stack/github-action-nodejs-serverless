import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import {buildSchema} from 'graphql';

const schema = buildSchema(`
  type Query { hello: String }
`);

const rootValue = {
  hello: () => 'Hello from Express GraphQL!'
}

const app = express();
app.use('/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: {headerEditorEnabled: true},
  }),
);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Express GraphQL server running on http://localhost:${port}/graphql`)
});
