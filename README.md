# Godaddy Cloud Servers API Wrapper
This node module wraps Godaddy's v1 Cloud Server API.


## Usage

```javascript

var CloudAPI = require('./gd-api-wrapper');

var config = {
	api_key: 'API_KEY',
	api_secret: 'API_SECRET'
};

var gdapi = new CloudAPI(config);

// Get All servers
gdapi.servers.get({}, function (err, data) {
	if (err) throw err;
	console.log(data.body);
});

// Get Specific Server
gdapi.servers.get({ serverId: 'kne13mdn'}, function (err, data) {
	if (err) throw err;
	console.log(data.body);
});

// ServerID can also be supplied as a string 
gdapi.servers.get('kne13mdn', function (err, data) {
	if (err) throw err;
	console.log(data.body);
});


```