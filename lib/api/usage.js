var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (callback) {

   if (typeof callback !== 'function') {
      return client.execPromise({
        path: '/usage'
      });
    }
    else {
      client.exec({
        path: '/usage'
      }, callback);
    }
  }

  return exports;
}