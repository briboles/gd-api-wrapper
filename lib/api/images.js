var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {
    var q = '';
    if (query) {
      if (query.imageId) {
        q = '/' + query.imageId;
      }
      else {
        q = '?' + querystring.stringify(query);
      }
    }

    client.exec({
      path: '/images' + q
    }, callback);
  }

  exports.create = function (data, callback) {
    // {serverSource: 'REQUIRED', name: 'REQUIRED', version: 'OPTIONAL'}
    client.exec({
      path: '/images',
      method: 'POST',
      body: data
    },callback);
  }

  exports.destroy = function (data, callback) {
  	var imageId = ( 'object' === typeof data) ? data.imageId : data;
    client.exec({
      path: '/images/' + imageId + '/destroy',
      method: 'POST',
      body: data
    },callback);
  }

  exports.actions = function (data, callback) {
    var imageId = ( 'object' === typeof data) ? data.imageId : data;
    var actionId = '';

    if (data.actionId) {
      actionId = '/' + data.actionId;
    }
    
    client.exec({
      path   :  '/servers/' + imageId + '/actions' + actionId
    }, callback);
  }

  return exports;
}