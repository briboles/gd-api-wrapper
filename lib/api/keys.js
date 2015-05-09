var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {
    var q = '';
    
    if (query.keyId) {
      q = '/' + query.keyId;
    }

    client.exec({
      path: '/keys' + q
    }, callback);
  }

  exports.create = function (data, callback) {
    client.exec({
      path: '/keys',
      method: 'POST',
      name: data.name,
      key: data.key
    }, callback);
  }

  return exports;
}