const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;

    // Verify token if defined
    jwt.verify(req.token, process.env.secret_key, (err, authData) => {
      if (err) {
        const err = new Error('User is not authorized to perform this action');
        err.status = 403;
        return next(err);
      } else {
        next();
      }
    });
  } else {
    // Forbidden if token is undefined
    const err = new Error('Forbidden');
    err.status = 403;
    return next(err);
  }
}

module.exports = verifyToken;
