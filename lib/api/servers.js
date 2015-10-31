var querystring = require('querystring');

module.exports = function () {
  var client = this;

  exports.get = function (query, callback) {
    var q = '';
    if (query) {
      if (query.serverId) {
        q = '/' + query.serverId;
      }
      else {
        q = '?' + querystring.stringify(query);
      } 
    }

    return client.exec({
      path: '/servers' + q
    }, callback);
  }

  exports.create = function (data, callback) {
    return client.exec({
      method : 'POST',
      path   : '/servers',
      body   : data
    }, callback);
  }

  exports.stop = function (data, callback) {
    var serverId = ( 'object' === typeof data) ? data.serverId : data;

    return client.exec({
      method : 'POST',
      path   :  '/servers/' + serverId + '/stop'
    }, callback);
  }

  exports.start = function (data, callback) {
    var serverId = ( 'object' === typeof data) ? data.serverId : data;

    return client.exec({
      method : 'POST',
      path   :  '/servers/' + serverId + '/start'
    }, callback);
  }

  exports.destroy = function (data, callback) {
    var serverId = ( 'object' === typeof data) ? data.serverId : data;

    return client.exec({
      method : 'POST',
      path   :  '/servers/' + serverId + '/destroy'
    }, callback);
  }

  exports.console = function (data, callback) {
    var serverId = ( 'object' === typeof data) ? data.serverId : data;
    
    return client.exec({
      path   :  '/servers/' + serverId + '/console'
    }, callback);
  }

  exports.actions = function (data, callback) {
    var serverId = ( 'object' === typeof data) ? data.serverId : data;
    var actionId = '';

    if (data.actionId) {
      actionId = '/' + data.actionId;
    }
    
    return client.exec({
      path   :  '/servers/' + serverId + '/actions' + actionId
    }, callback);
  }

  exports.addresses = function (data, callback) {
    var serverId = ( 'object' === typeof data) ? data.serverId : data;
    var addressId = (data.addressId) ? data.addressId : '';
    
    if (addressId !== '') {
      var urlPath = '/servers/' + serverId + '/address/' + addressId;
    }
    else {
      var urlPath = '/servers/' + serverId + '/addresses';
    }

    return client.exec({
      path   :  urlPath
    }, callback);
  }

  return exports;
}