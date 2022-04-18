const errorHandler = (requestProperties, callBack) => {
  callBack(404, {
    massage: 'i am error handler'
  });
};
module.exports = errorHandler;
