const createRandomString = require('../Data/createRandomString');
const dataHandler = require('../Data/dataHandler');
const jsonToObject = require('../Data/jsonToObject');

const tokenHandler = (requestProperties, callBack) => {
  const acceptedMethod = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

  if (acceptedMethod.indexOf(requestProperties.method) > -1) {
    tokenObject[requestProperties.method](requestProperties, callBack);
  } else {
    callBack(404, {
      massage: 'Not accepted method'
    });
  }
};

const tokenObject = {};

// POST Section

tokenObject.POST = (requestProperties, callBack) => {
  const phone =
    typeof requestProperties.body.phone === 'string' &&
    requestProperties.body.phone.trim().length === 11
      ? requestProperties.body.phone
      : null;

  const password =
    typeof requestProperties.body.password === 'string' &&
    requestProperties.body.password.trim().length > 0
      ? requestProperties.body.password
      : null;

  if (phone && password) {
    dataHandler.read('usersData', phone, (error, data) => {
      if (!error && data) {
        if (password === jsonToObject(data).password) {
          const tokenId = createRandomString(6);

          const expireTime = Date.now() + 60 * 1000 * 60;

          const tokenObject = {
            tokenId,
            expireTime,
            phone
          };

          dataHandler.write('tokens', tokenId, tokenObject, (error) => {
            if (error) {
              callBack(400, {
                error: ' error from token write (post) '
              });
            } else {
              callBack(202, {
                message: ' your token add successfully at ' + tokenId
              });
            }
          });
        } else {
          callBack(500, {
            message: 'invalid password try again'
          });
        }
      } else {
        callBack(404, {
          message: 'please login First'
        });
      }
    });
  } else {
    callBack(404, {
      message: 'Invalid password & phone number'
    });
  }
};

// GET Section

tokenObject.GET = (requestProperties, callBack) => {
  const getQuery = requestProperties.query.token;

  const query =
    typeof getQuery === 'string' && getQuery.trim().length > 0
      ? getQuery
      : null;

  if (query) {
    dataHandler.read('tokens', query, (error, data) => {
      if (!error && data) {
        const tokenObject = jsonToObject(data);
        delete tokenObject.phone;
        callBack(202, {
          tokenObject
        });
      } else {
        callBack(404, {
          error: "you haven't any token please get first"
        });
      }
    });
  } else {
    callBack(400, {
      error: 'please submit valid token'
    });
  }
};

// PUT Section

tokenObject.PUT = (requestProperties, callBack) => {
  const getToken = requestProperties.body.token;

  const token =
    typeof getToken === 'string' && getToken.trim().length > 0
      ? getToken
      : null;

  if (token) {
    // check that token file already have or not

    dataHandler.read('tokens', token, (error, data) => {
      if (!error && data) {
        let tokenObject = jsonToObject(data);

        const getExtend = requestProperties.body.extend;

        const extend =
          typeof getExtend === 'boolean' && getExtend === true
            ? getExtend
            : false;

        if (extend) {
          if (tokenObject.expireTime > Date.now()) {
            tokenObject.expireTime = Date.now() + 60 * 1000;

            // store updated token

            dataHandler.update('tokens', token, tokenObject, (error) => {
              if (error) {
                callBack(500, {
                  error:
                    'server has some problem to expend token,try again later'
                });
              } else {
                callBack(202, {
                  message: 'successfully done to expend time'
                });
              }
            });
          } else {
            callBack(400, {
              error: 'your token already expired'
            });
          }
        } else {
          callBack(400, {
            error: "you can't validation please buy a token"
          });
        }
      } else {
        callBack(404, {
          error: "you haven't any token please get first"
        });
      }
    });
  } else {
    callBack(400, {
      error: 'please submit valid token'
    });
  }
};

// DELETE Section

tokenObject.DELETE = (requestProperties, callBack) => {
  const getQuery = requestProperties.query.token;

  const query =
    typeof getQuery === 'string' && getQuery.trim().length > 0
      ? getQuery
      : false;

  if (query) {
    dataHandler.read('tokens', query, (error, data) => {
      if (!error && data) {
        dataHandler.delete('tokens', query, (error) => {
          if (error) {
            callBack(500, {
              error: 'server side error for deleting token'
            });
          } else {
            callBack(202, {
              message: 'successfully delete token'
            });
          }
        });
      } else {
        callBack(400, {
          error: 'that token invalid please buy again thanks'
        });
      }
    });
  } else {
    callBack(400, {
      error: 'please define valid token'
    });
  }
};

module.exports = tokenHandler;
