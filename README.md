# Godaddy Cloud Servers API Wrapper
This node module wraps Godaddy's v1 Cloud Server API.

## Install
```bash
$ npm install gd-api-wrapper --save
```

### Provider API Documentation

Full API docs can be found at https://cloud.godaddy.com/docs. As of writing this, the cloud server offering through Godaddy.com is in a limited beta.

### Basic Usage

```Javascript

var CloudAPI = require('gd-api-wrapper');
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

### API Also Supports Promises

```Javascript

var CloudAPI = require('gd-api-wrapper');
var config = {
    api_key: 'API_KEY',
    api_secret: 'API_SECRET'
};

var gdapi = new CloudAPI(config);

// ServerID can also be supplied as a string 
gdapi.servers.get('kne13mdn').then(function (data) {
    console.log(data.body);
});

```

### Available Functions

The format of the API class follows the same format as the API endpoints themselves. These are the currently available properties.
```
{ 
  servers:{ 
     get: [Function],
     create: [Function],
     stop: [Function],
     start: [Function],
     destroy: [Function],
     console: [Function],
     actions: [Function] 
  },
  images: { 
     get: [Function],
     create: [Function],
     destroy: [Function],
     actions: [Function] 
  },
  addresses:{ 
     get: [Function],
     create: [Function],
     attach: [Function],
     detach: [Function],
     destroy: [Function],
     actions: [Function] 
  },
  specs: {
    get: [Function] 
  },
  keys: { 
    get: [Function], 
    create: [Function] 
  },
  limits: { 
    get: [Function] 
  },
  usage: { 
    get: [Function]
  } 
}
```

**Server Examples**

Examples of some server function usage:

```Javascript

// Create a new server
gdapi.servers.create({
    image: 'fedora-20', 
    spec: 'tiny',
    hostname: 'myServer',
    username: 'myuser',
    password: 'mypassword'
  }, 
    function (err, data) {
      if (err) console.error(err);
      console.log(data.body);
});

// Get all actions performed on a serverId
gdapi.servers.actions({ serverId: 'idstring' }, function (err, data) {
  if (err) console.error(err);
  console.log(data.body);
});

```

### Support or Contact

Pull requests are welcome. Issues can be posted at https://github.com/briboles/gd-api-wrapper/issues.

Design Inspired by https://github.com/pauldenotter/nautical