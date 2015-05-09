var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {
    client.exec({
      path: '/limits'
    }, callback);
  }

  return exports;
}