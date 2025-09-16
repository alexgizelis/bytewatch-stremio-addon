// api/index.js
const { serveHTTP } = require('stremio-addon-sdk');
const builder = require('../builder'); // where you define addonBuilder, stream handler, etc.

module.exports = (req, res) => {
  serveHTTP(builder.getInterface(), { req, res });
};
