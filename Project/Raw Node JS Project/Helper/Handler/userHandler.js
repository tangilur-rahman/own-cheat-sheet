const dataHandler = require('../Data/dataHandler');
const jsonToObject = require('../Data/jsonToObject');

const validation = require('../validation/tokenValidation');

const userHandler = (requestProperties, callBack) => {
  const acceptedMethod = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];

  if (acceptedMethod.indexOf(requestProperties.method) > -1) {
    methodObject[requestProperties.method](requestProperties, callBack);
  } else {
    callBack(404, {
      massage: 'Not accepted method'
    });
  }
};

const methodObject = {};

// POST Section

methodObject.POST = (requestProperties, callBack) => {
  const firstName =
    typeof requestProperties.body.firstName === 'string' &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : null;

  const lastName =
    typeof requestProperties.body.lastName === 'string' &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : null;

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

  const checkBox =
    typeof requestProperties.body.checkBox === 'boolean'
      ? requestProperties.body.checkBox
      : null;

  if (firstName && lastName && phone && password && checkBox) {
    // check that file exist or not

    dataHandler.read('usersData', phone, (error) => {
      if (error) {
        // if not exist
        let userData = {
          firstName,
          lastName,
          phone,
          password,
          checkBox
        };

        // add that file

        dataHandler.write('usersData', phone, userData, (error) => {
          if (error) {
            callBack(404, {
              message: 'something was wrong from writeFile'
            });
          } else {
            callBack(200, {
              message: 'your account create successfully'
            });
          }
        });
      } else {
        callBack(500, {
          massage: 'you already sign up please login'
        });
      }
    });
  } else {
    callBack(400, {
      massage: 'You make something wrong when submitted data'
    });
  }
};

// GET Section

methodObject.GET = (requestProperties, callBack) => {
  let getPhone = requestProperties.query.phone;

  let phone =
    typeof getPhone === 'string' && getPhone.trim().length === 11
      ? getPhone
      : false;

  let getToken = requestProperties.headerObject.token;

  let token =
    typeof getToken === 'string' && getToken.length > 0 ? getToken : false;

  if (phone && token) {
    // verification token

    validation(token, phone, (isValidToken) => {
      if (isValidToken) {
        // get that User Info

        dataHandler.read('usersData', phone, (error, data) => {
          if (!error && data) {
            const dataObject = jsonToObject(data);

            // can't modify object JSON file, but object does

            delete dataObject.password;

            callBack(202, {
              dataObject
            });
          } else {
            callBack(404, {
              message: 'file not found'
            });
          }
        });
      } else {
        callBack(403, {
          message: 'please logIn first'
        });
      }
    });
  } else {
    callBack(404, {
      error: ' authentication failure!'
    });
  }
};

// PUT Section

methodObject.PUT = (requestProperties, callBack) => {
  const firstName =
    typeof requestProperties.body.firstName === 'string' &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : null;

  const lastName =
    typeof requestProperties.body.lastName === 'string' &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : null;

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

  if (firstName && lastName && phone && password) {
    let getToken = requestProperties.headerObject.token;

    let token =
      typeof getToken === 'string' && getToken.length > 0 ? getToken : false;

    if (phone && token) {
      // verification token

      validation(token, phone, (isValidToken) => {
        if (isValidToken) {
          //checking that file exist or not

          dataHandler.read('usersData', phone, (error) => {
            if (error) {
              callBack(400, {
                message: 'please login first'
              });
            } else {
              const updateObject = {
                firstName,
                lastName,
                password,
                checkBox: true,
                phone
              };

              // update that file

              dataHandler.update('usersData', phone, updateObject, (error) => {
                if (error) {
                  callBack(500, {
                    error: 'server side error'
                  });
                } else {
                  callBack(205, {
                    message: 'successfully update'
                  });
                }
              });
            }
          });
        } else {
          callBack(403, {
            message: 'please logIn first'
          });
        }
      });
    } else {
      callBack(404, {
        error: ' authentication failure!'
      });
    }
  } else {
    callBack(400, {
      massage: " you can't update, something wrong when submitted data"
    });
  }
};

// PATCH Section

methodObject.PATCH = (requestProperties, callBack) => {
  const firstName =
    typeof requestProperties.body.firstName === 'string' &&
    requestProperties.body.firstName.trim().length > 0
      ? requestProperties.body.firstName
      : null;

  const lastName =
    typeof requestProperties.body.lastName === 'string' &&
    requestProperties.body.lastName.trim().length > 0
      ? requestProperties.body.lastName
      : null;

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

  let getToken = requestProperties.headerObject.token;

  let token =
    typeof getToken === 'string' && getToken.length > 0 ? getToken : false;

  if (phone && token) {
    // validation token

    validation(token, phone, (isValidToken) => {
      if (isValidToken) {
        if (firstName || lastName || password) {
          // check that file exist or not

          dataHandler.read('usersData', phone, (error, data) => {
            let getData = jsonToObject(data);

            // can't modify JSON file directly,but object dose

            if (!error && getData) {
              if (firstName) {
                getData.firstName = firstName;
              }

              if (lastName) {
                getData.lastName = lastName;
              }

              if (password) {
                getData.password = password;
              }

              // add that modify object

              dataHandler.update('usersData', phone, getData, (error) => {
                if (error) {
                  callBack(500, {
                    error: 'server side error from patch method'
                  });
                } else {
                  callBack(202, {
                    message: 'patch method work successfully'
                  });
                }
              });
            } else {
              callBack(400, {
                error: 'please submit properties to update'
              });
            }
          });
        } else {
          callBack(400, {
            error: 'please submit properties to update'
          });
        }
      } else {
        callBack(403, {
          message: 'please logIn first'
        });
      }
    });
  } else {
    callBack(400, {
      error: 'authentication failure!'
    });
  }
};

// DELETE Section

methodObject.DELETE = (requestProperties, callBack) => {
  const phone =
    typeof requestProperties.query.phone === 'string' &&
    requestProperties.query.phone.trim().length === 11
      ? requestProperties.query.phone
      : null;

  let getToken = requestProperties.headerObject.token;

  let token =
    typeof getToken === 'string' && getToken.length > 0 ? getToken : false;

  if (phone && token) {
    // validation token

    validation(token, phone, (isValidToken) => {
      if (isValidToken) {
        // checking that file exist or not

        dataHandler.read('usersData', phone, (error, data) => {
          if (!error && data) {
            dataHandler.delete('usersData', phone, (error) => {
              if (error) {
                callBack(500, {
                  error: 'server side error'
                });
              } else {
                callBack(202, {
                  message: 'delete successfully'
                });
              }
            });
          } else {
            callBack(500, {
              error: 'server side error'
            });
          }
        });
      } else {
        callBack(403, {
          message: 'please logIn first'
        });
      }
    });
  } else {
    callBack(400, {
      error: 'authentication failure!'
    });
  }
};

module.exports = userHandler;
