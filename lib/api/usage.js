var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {

    var start = new Date(query.start).toISOString();
    var end = new Date(query.end).toISOString();
    var q = '?start=' + start + '&end=' + end;

    client.exec({
      path: '/usage' + q
    }, callback);
  }

  return exports;
}