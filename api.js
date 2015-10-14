import 'isomorphic-fetch';

export default class API {
  cache = {};

  get(url) {
    if (this.cache[url]) {
      return Promise.resolve(this.cache[url]);
    }

    return fetch(`http://hello${url}`).then(r => this.cache[url] = r.json());
  }
}
