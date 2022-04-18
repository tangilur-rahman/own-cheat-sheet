const dataHandler = require('../Data/dataHandler');
const jsonToObject = require('../Data/jsonToObject');

const validation = (tokenId, phone, callBack) => {
  dataHandler.read('tokens', tokenId, (error, data) => {
    const dataObject = jsonToObject(data);

    if (!error && dataObject) {
      if (dataObject.phone === phone && dataObject.expireTime > Date.now()) {
        callBack(true);
      } else {
        callBack(false);
      }
    } else {
      callBack(false);
    }
  });
};

module.exports = validation;
