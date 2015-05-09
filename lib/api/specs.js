var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {
    var q = '';
    
    if (query) {
      if (query.specId) {
        q = '/' + query.specId;
      }
      else {
        q = '?' + querystring.stringify(query);
      }
    }


    client.exec({
      path: '/specs' + q
    }, callback);
  }

  return exports;
}