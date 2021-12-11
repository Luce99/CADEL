const { GraphQLScalarType, Kind } = require('graphql');

module.exports = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'DateTime scalar type',

        parseValue(value){
            return new Date (value)
        },
        parseLiteral(ast){
            if (ast.kind === kind.INT){
                return parseInt(ast.value, 10)
            }
            return null
        },
        serialize(value){ const date = new Date(value)
        return date.toISOString()
        }
    })
}