const Post = require("../models/post.model");
const createError = require("http-errors");

async function create(postData) {
  const postFound = await Post.findOne({
    name: postData.name,
    user: postData.user,
  });
  if (postFound) {
    throw createError(409, "Post already in use");
  }

  const newPost = await Post.create(postData);
  return newPost;
}

async function getAll() {
  const allPosts = await Post.find().populate("user");
  return allPosts;
}

async function getById(id) {
  const post = await Post.findById(id).populate("user");
  return post;
}

async function deleteById(id) {
  const postDelete = await Post.findByIdAndDelete(id);
  return postDelete;
}

async function updateById(id, newPostData) {
  const postUpdate = await Post.findByIdAndUpdate(id, newPostData, {
    new: true,
  });
  return postUpdate;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
