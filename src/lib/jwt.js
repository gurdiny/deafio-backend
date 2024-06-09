const jsonWebToken = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function sign(payload) {
  return jsonWebToken.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

function verifyFun(token) {
  return jsonWebToken.verify(token, JWT_SECRET);
}

module.exports = { sign, verifyFun };
