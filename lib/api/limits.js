var querystring = require('querystring');

module.exports = function () {
  var client = this;

  // Only requires one param of callback. Allowing for 2 to match format of other functions.
  exports.get = function (query, callback) {
    if (typeof query === 'function') { callback = query; }
    client.exec({
      path: '/limits'
    }, callback);
  }

  return exports;
}