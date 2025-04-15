const userRepo = require('../repositories/userRepository');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');

exports.register = async ({ name, email, password }) => {
  const existing = await userRepo.findByEmail(email);
  if (existing) throw { status: 400, message: 'Email already registered' };

  const hashed = await hashPassword(password);
  const user = await userRepo.createUser({ name, email, password: hashed });

  return { id: user.id, name: user.name, email: user.email };
};

exports.login = async ({ email, password }) => {
  const user = await userRepo.findByEmail(email);
  if (!user) throw { status: 400, message: 'Invalid email or password' };

  const match = await comparePassword(password, user.password);
  if (!match) throw { status: 400, message: 'Invalid email or password' };

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return { token };
};