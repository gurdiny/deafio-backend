const createError = require("http-errors");
const jwt = require("../lib/jwt");
const encrypt = require("../lib/encrypt");
const Users = require("../models/user.model");

async function logIn(email, password) {
  const user = await Users.findOne({ email: email });
  if (!user) {
    throw createError(401, "invalid data");
  }

  const isPaswordValid = await encrypt.compare(password, user.password);

  if (!isPaswordValid) {
    throw createError(401, "invalid data");
  }

  const token = jwt.sign({ id: user._id });
  return token;
}

module.exports = { logIn };
