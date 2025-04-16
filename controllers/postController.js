const { success } = require('../helpers/responseHandler');
const postService = require('../services/postService');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAllPosts();
    return success(res, posts, 'Post fetched successfully', 200);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await postService.getPostById(req.params.id);
    return success(res, post, 'Post fetched successfully', 200);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const post = await postService.createPost(req.user.id, req.body);
    return success(res, post, 'Post created successfully', 201);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const post = await postService.updatePost(req.params.id, req.user.id, req.body);
    return success(res, post, 'Post updated successfully', 200);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    await postService.deletePost(req.params.id, req.user.id);
    return success(res, {}, 'Post deleted successfully', 200);
  } catch (err) {
    next(err);
  }
};