import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'File',
  description: 'A file.',
  fields: () => ({
    path: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The path of the file.',
    },
    length: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The size of the entry.',
    },
  }),
});
