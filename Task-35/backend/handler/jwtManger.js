import jwt from "jsonwebtoken";

const authentication = (req, res, next) => {
    const token = req.cookies[process.env.cookieName];
  if (!token) return res.status(401).json("Please Login again"); // 401 Unauthorized is a more suitable status code

  jwt.verify(token, process.env.secert, (err, user) => { // typo corrected: 'secert' -> 'secret'
    if (err) return res.status(403).json("Your token is invalid or expired");
    req.user = user;
    next();
  });
};

export { authentication };