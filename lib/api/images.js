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
  return exports;
}