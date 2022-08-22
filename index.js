"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express_graphql_1 = require("express-graphql");
var graphql_1 = require("graphql");
var schema = (0, graphql_1.buildSchema)("\n  type Query { hello: String }\n");
var rootValue = {
    hello: function () { return 'Hello from Express GraphQL!'; }
};
var app = (0, express_1["default"])();
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: rootValue,
    graphiql: { headerEditorEnabled: true }
}));
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Express GraphQL server running on http://localhost:".concat(port, "/graphql"));
});
