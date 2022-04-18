const homeHandler = require('./Handler/homeHandler');
const tokenHandler = require('./Handler/tokenHandler');
const userHandler = require('./Handler/userHandler');

const router = {
  '': homeHandler,
  home: homeHandler,
  token: tokenHandler,
  user: userHandler
};

module.exports = router;
