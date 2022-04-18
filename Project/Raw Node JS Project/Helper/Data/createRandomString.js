const createRandomString = (strLength) => {
  let length =
    typeof strLength === 'number' && strLength > 0 ? strLength : null;

  if (length) {
    let acceptCharacter = 'asdfghjkl12345';

    let tokenId = '';
    for (let i = 1; i <= length; i++) {
      let character = acceptCharacter.charAt(
        Math.floor(Math.random() * acceptCharacter.length)
      );
      tokenId += character;
    }

    return tokenId;
  } else {
    throw Error('error from createRandomString');
  }
};

module.exports = createRandomString;
