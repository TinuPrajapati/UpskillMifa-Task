const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const token = req.cookies.accesskey;
  if (!token) {
    return res.status(404).json("Your token is missing");
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json("Your token is invalid or expired");
    }

    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
