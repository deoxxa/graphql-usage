import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Scrape',
  description: 'A scrape of an entry.',
  fields: () => ({
    infoHash: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The subject of the scrape.',
    },
    tracker: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The tracker that was scraped.',
    },
    time: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The time of the scrape operation.',
    },
    success: {
      type: new GraphQLNonNull(GraphQLBoolean),
      description: 'An indicator of the success of the request.',
    },
    downloaded: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The `downloaded` count of the scrape.',
    },
    complete: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The `complete` count of the scrape.',
    },
    incomplete: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The `incomplete` count of the scrape.',
    },
  }),
});
