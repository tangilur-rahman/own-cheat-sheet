const url = require('url');

const router = require('./router');

const errorHandle = require('./Handler/errorHandler');

const jsonToObject = require('./Data/jsonToObject');

const reqResHandler = (request, response) => {
  const method = request.method;

  const urlObject = url.parse(request.url, true);

  const pathName = urlObject.pathname.replace(/^\/+|\/+$/g, '');

  const query = urlObject.query;

  const headerObject = request.headers;

  const requestProperties = {
    method,
    pathName,
    query,
    headerObject
  };

  const checkHandler = router[pathName] ? router[pathName] : errorHandle;

  let realData = '';

  // request.on.data section

  request.on('data', (chunk) => {
    realData += chunk;
  });

  // request.on.end section start

  request.on('end', () => {
    requestProperties.body = jsonToObject(realData);

    checkHandler(requestProperties, (statusCode, responseObject) => {
      const statusCode1 = typeof statusCode === 'number' ? statusCode : 500;

      const responseObject1 =
        typeof responseObject === 'object' ? responseObject : {};

      const jsonObject = JSON.stringify(responseObject1);

      response.writeHead(statusCode1, { 'content-type': 'application/json' });

      response.end(jsonObject);

      // Note: can't output directly object,but json does
    });
  });
};

module.exports = reqResHandler;
