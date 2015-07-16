// Addresses Endpoint Testing

var GDAPI = require('../index.js');
var config = require('./config');
var gdapi = new GDAPI(config);

var gdapi = new GDAPI(APIkey);

var addressId;
var serverId = '8e7tj8l0';

describe('Addresses Functions', function() {
  this.timeout(4000);

  describe('Get All Addresses', function () {
    it('Should return list of all addresses', function (done) {
      gdapi.addresses.get({},function(err, data) {
        if (err) throw err;
        if (data.body.results) {
          // Save first address ID for use in future tests.
          addressId = data.body.results[0].addressId;
          done();
        }
      });
    })
  })

  describe('Get All Addresses', function () {
    it('Should return a filtered list of only public addresses', function (done) {
      gdapi.addresses.get({ type: 'PUBLIC' },function(err, data) {
        if (err) throw err;
        if (data.body.results) {
          for (i in data.body.results) {
            if (data.body.results[i].type !== 'PUBLIC') {
              throw new Error('Non Public result found')
              break;
            }
          }
          done();
        }
      });
    })
  })

  describe('Get One Address', function () {
    it('Should return one address', function (done) {
      gdapi.addresses.get({ addressId: addressId },function(err, data) {
        if (err) throw err;
        if (typeof data.body === 'object') {
          done();
        }
      });
    })
  })

/*

  describe('Create New Address', function () {
    it('Should return one address in status NEW', function (done) {
      gdapi.addresses.create(function(err, data) {
        if (err) throw err;
        if (typeof data.body === 'object' && data.body.status === 'NEW') {
          done();
        }
      });
    })
  })

*/

  describe('Get One Address', function () {
    it('Should return one address', function (done) {
      gdapi.addresses.get({ addressId: addressId },function(err, data) {
        if (err) throw err;
        if (typeof data.body === 'object') {
          done();
        }
      });
    })
  })

});


