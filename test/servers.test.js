// Addresses Endpoint Testing

var GDAPI = require('../index.js');
var config = require('./config');
var gdapi = new GDAPI(config);

var serverId;

describe('Servers Functions', function() {
  this.timeout(4000);

  describe('Get All Servers', function () {
    it('Should return list of all servers', function (done) {
      gdapi.servers.get({},function(err, data) {
        if (err) throw err;
        if (data.body.results) {
          // Save first address ID for use in future tests.
          serverId = data.body.results[0].serverId;
          done();
        }
      });
    })
  })

});


