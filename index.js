import {graphql} from 'graphql';
import schema from './schema';
import API from './api';

const query = `query Q($infoHash: String!, $timeLower: String!, $timeUpper: String!) {
  entry(infoHash: $infoHash) {
    infoHash,
    name,
    size,
    files {
      path,
      length,
    },
    scrapes(timeLower: $timeLower, timeUpper: $timeUpper) {
      tracker,
      time,
      success,
      downloaded,
      complete,
      incomplete,
    },
  },
}`;

const rootValue = {
  api: new API(),
};

const variableValues = {
  infoHash: 'db2fffc1f5c045c475a5f3a254b508d49009328f',
  timeLower: 'what',
  timeUpper: 'dude',
};

graphql(schema, query, rootValue, variableValues).then(r => {
  if (r.errors) {
    r.errors.forEach(e => {
      console.log(e.stack);
    });

    return;
  }

  console.log(r);
});
