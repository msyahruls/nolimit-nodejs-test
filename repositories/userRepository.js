const { User } = require('../models');

exports.findByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.createUser = async (data) => {
  return await User.create(data);
};