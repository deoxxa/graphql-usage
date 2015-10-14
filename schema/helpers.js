export function getEntry(rootValue, {infoHash}={}) {
  const {api} = rootValue;

  return api.get(`/entry/${infoHash}`);
};

export function getEntries(rootValue, {search=null}={}) {
  const {api} = rootValue;

  return api.get(`/entry?search=${search}`);
};

export function getScrapes(rootValue, {infoHash=null, tracker=null, timeLower=null, timeUpper=null}={}) {
  const {api} = rootValue;

  return api.get(`/api/v1/scrapes?${qs.stringify({
    infoHash,
    tracker,
    timeLower,
    timeUpper,
  })}`);
}
