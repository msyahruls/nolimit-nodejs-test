const postRepo = require('../repositories/postRepository');

exports.getAllPosts = () => postRepo.getAll();

exports.getPostById = async (id) => {
  const post = await postRepo.getById(id);
  if (!post) throw { status: 404, message: 'Post not found' };
  return post;
};

exports.createPost = (authorId, content) => {
  if (!content) throw { status: 400, message: 'Content is required' };
  return postRepo.create({ content, authorId });
};

exports.updatePost = async (postId, userId, content) => {
  const post = await postRepo.findById(postId);
  if (!post) throw { status: 404, message: 'Post not found' };
  if (post.authorId !== userId) throw { status: 403, message: 'Forbidden' };

  return postRepo.update(post, { content });
};

exports.deletePost = async (postId, userId) => {
  const post = await postRepo.findById(postId);
  if (!post) throw { status: 404, message: 'Post not found' };
  if (post.authorId !== userId) throw { status: 403, message: 'Forbidden' };

  return postRepo.delete(post);
};