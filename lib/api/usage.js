var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (callback) {
    return client.exec({
      path: '/usage'
    }, callback);
  }

  return exports;
}