var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {
    var q = '';
    if (query) {
      if (query.addressId) {
        q = '/' + query.addressId;
      }
      else {
        q = '?' + querystring.stringify(query);
      }
    }
    return client.exec({
      path: '/addresses' + q
    }, callback);
  }

  exports.create = function (callback) {
    return client.exec({
      path: '/addresses',
      method: 'POST'
    }, callback);
  }

  exports.attach = function (query, callback) {

    var addressId = query.addressId;
    var postData = { server: query.serverId, serverId: query.serverId }; // Issue with documentation being different than API service.

    return client.exec({
      path: '/addresses/' + addressId + '/attach',
      method: 'POST',
      body: postData
    }, callback);

  }

  exports.detach = function (query, callback) {
  	var addressId = ( 'object' === typeof query) ? query.addressId : query;
    return client.exec({
      path: '/addresses/' + addressId + '/detach',
      method: 'POST'
    }, callback);
  }

	exports.destroy = function (query, callback) {
  	var addressId = ( 'object' === typeof query) ? query.addressId : query;
    return client.exec({
      path: '/addresses/' + addressId + '/destroy',
      method: 'POST'
    }, callback);
  }

  exports.actions = function (query, callback) {
    var q = '';
    if (query) {
      if (query.addressActionId) {
        q = '/' + query.addressId + '/actions/' + query.addressActionId;
      }
      else {
        q = '/' + query.addressId + '/actions?' + querystring.stringify(query);
      }
    }
    return client.exec({
      path: '/addresses' + q
    }, callback);
  }

  return exports;
}