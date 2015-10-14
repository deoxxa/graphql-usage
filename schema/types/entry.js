import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

import FileType from './file';
import ScrapeType from './scrape';

import {
  getScrapes,
} from '../helpers';

export default new GraphQLObjectType({
  name: 'Entry',
  description: 'An entry.',
  fields: () => ({
    infoHash: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The info_hash of the entry.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The name of the entry.',
    },
    size: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The size of the entry.',
    },
    firstSeen: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The first time we saw this entry.',
    },
    files: {
      type: new GraphQLList(FileType),
      description: 'The files described by the entry.',
    },
    trackers: {
      type: new GraphQLList(GraphQLString),
      description: 'The trackers used by this entry.',
    },
    trackerCount: {
      type: new GraphQLList(GraphQLInt),
      description: 'The number of trackers used by this entry.',
    },
    locations: {
      type: new GraphQLList(GraphQLString),
      description: 'The possible locations for this entry.',
    },
    locationCount: {
      type: new GraphQLList(GraphQLInt),
      description: 'The number of possible locations for this entry.',
    },
    scrapes: {
      type: new GraphQLList(ScrapeType),
      description: 'The scrapes for this entry.',
      args: {
        tracker: {name: 'tracker', type: GraphQLString},
        timeLower: {name: 'timeLower', type: GraphQLString},
        timeUpper: {name: 'timeUpper', type: GraphQLString},
      },
      resolve: (entry, {tracker, timeLower, timeUpper}, context) => {
        const infoHash = entry.id;

        return getScrapes(context.rootValue, {
          infoHash,
          tracker,
          timeLower,
          timeUpper,
        });
      },
    },
  }),
});