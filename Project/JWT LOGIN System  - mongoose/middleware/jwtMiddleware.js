const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  try {
    await jwt.verify(req.cookies.jwt, process.env.SECRET_KEY);

    next();
  } catch (error) {
    res.redirect('/login');
  }
};

module.exports = verifyToken;
