import {
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import EntryType from './types/entry';

import {
  getEntries,
  getEntry,
} from './helpers';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      entry: {
        type: EntryType,
        args: {
          infoHash: {
            name: 'infoHash',
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: (rootValue, {infoHash}) => getEntry(rootValue, {infoHash}),
      },
      entries: {
        type: new GraphQLList(EntryType),
        args: {
          search: {
            name: 'search',
            type: GraphQLString,
          },
        },
        resolve: (rootValue, {search}) => getEntries(rootValue, {search}),
      },
    }),
  }),
});
