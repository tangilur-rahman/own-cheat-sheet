const homeHandler = (requestProperties, callBack) => {
  callBack(202, {
    massage: 'i am home handler'
  });
};
module.exports = homeHandler;
