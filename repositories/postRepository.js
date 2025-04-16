const { Post, User } = require('../models');

exports.getAll = async () => {
  return await Post.findAll({
    include: [{ model: User, attributes: ['id', 'name', 'email'] }],
    order: [['createdAt', 'DESC']]
  });
};

exports.getById = async (id) => {
  return await Post.findByPk(id, {
    include: [{ model: User, attributes: ['id', 'name', 'email'] }]
  });
};

exports.create = async (data) => {
  return await Post.create(data);
};

exports.update = async (post, data) => {
  return await post.update(data);
};

exports.delete = async (post) => {
  return await post.destroy();
};

exports.findById = async (id) => {
  return await Post.findByPk(id);
};