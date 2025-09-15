const { addonBuilder } = require('stremio-addon-sdk');
const NodeCache = require('node-cache');
const axios = require('axios');
const extractor = require('./unified-extractor');
const logger = require('./logger');

const builder = new addonBuilder({
  id: 'org.bytetan.bytewatch',
  version: '1.0.0',
  name: 'ByteWatch',
  description: 'Get stream links for tv shows and movies',
  resources: ['stream'],
  types: ['movie', 'series'],
  catalogs: [],
  logo: 'https://www.bytetan.com/static/img/logo.png',
  idPrefixes: ['tt']
});

// all your stream handler logic here...
builder.defineStreamHandler(async ({ type, id }) => {
  logger.info(`Stream request: ${type}, ${id}`);
  try {
    if (type === 'movie') {
      const imdbId = id.split(':')[0];
      const streams = await getMovieStreams(imdbId);
      return { streams };
    }
    if (type === 'series') {
      const [imdbId, season, episode] = id.split(':');
      const streams = await getSeriesStreams(imdbId, season, episode);
      return { streams };
    }
    return { streams: [] };
  } catch (err) {
    console.error('Error in stream handler:', err.message);
    return { streams: [] };
  }
});

module.exports = builder;
