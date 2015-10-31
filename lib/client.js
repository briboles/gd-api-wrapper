var https = require('https');
var url = require('url');
var Promise = require('q');
var header,
    baseUrl;

function Client(config) {
  var client = this;
  var internals = {};

  if (config === undefined || config.api_key === undefined || config.api_secret === undefined) {
    return console.error('An API Key and Secret are required.');
  }

  baseUrl = url.parse(config.baseUrl || 'https://api.godaddy.com/v1/cloud');

  header = {
    "Authorization": 'sso-key '+config.api_key+':'+config.api_secret,
    "Accept": 'application/json',
    "Content-Type": 'application/json'
  };

  internals.exec = function(request, callback) {
    
    var deferred = Promise.defer();
    
    var req,
        requestBody;

    var options = {
      method   : request.method || 'GET',
      hostname : baseUrl.hostname,
      port     : 443,
      path     : baseUrl.path + request.path,
      headers  : header
    };

    if (request.body) requestBody = request.body;

    req = https.request(options, function (res) {
      var responseData = '';

      res.on('error', function (err) {
        deferred.reject(err);
      });

      res.on('data', function (chunk) {
        responseData += chunk;
      });

      res.on('end', function () {
        var response = {
        	res: res,
        	body: responseData
        };

        if (res.headers['content-type'] !== undefined && res.headers['content-type'].slice(0, 16) === 'application/json') {
          response.body = JSON.parse(response.body);
        }

        deferred.resolve(response);
        deferred.promise.nodeify(callback);
      });

    });

    if (requestBody) {
    	requestBody = ('object' === typeof requestBody) ? JSON.stringify(requestBody) : requestBody;
    	req.write(requestBody);
    }

    req.end();

    return deferred.promise;

  }

  // Assign API Functions to class property.
  client.servers = require('./api/servers').bind(internals)();
  client.addresses = require('./api/addresses').bind(internals)();
  client.images = require('./api/images').bind(internals)();
  client.specs = require('./api/specs').bind(internals)();
  client.keys = require('./api/keys').bind(internals)();
  client.limits = require('./api/limits').bind(internals)();
  client.usage = require('./api/usage').bind(internals)();

}

module.exports = Client;