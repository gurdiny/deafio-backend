const User = require("../models/user.model");
const encrypt = require("../lib/encrypt");
const createError = require("http-errors");

async function create(userData) {
  const userFound = await User.findOne({ email: userData.email });
  if (userFound) {
    throw createError(409, "email already in use");
  }
  userData.password = await encrypt.encrypt(userData.password);
  const newUser = await User.create(userData);
  return newKoder;
}

async function getAll() {
  const allUser = await User.find();
  return allUser;
}

async function getById(id) {
  const user = await User.findById(id);
  return user;
}

async function deleteById(id) {
  const userDeleted = await User.findByIdAndDelete(id);
  return userDeleted;
}

async function updateById(id, newUserData) {
  const userUpdated = await User.findByIdAndUpdate(id, newUserData, {
    new: true,
  });
  return userUpdated;
}
module.exports = { create, getAll, getById, deleteById, updateById };
