const userRepo = require('../repositories/userRepository');
const { hashPassword, comparePassword } = require('../utils/hash');
const jwt = require('jsonwebtoken');
const { loginSchema, registerSchema } = require('../validators/authValidator');
const validateSchema = require('../helpers/validateSchema');

exports.register = async (payload) => {
  const { name, email, password } = validateSchema(registerSchema, payload);

  const existing = await userRepo.findByEmail(email);
  if (existing) throw { status: 400, message: 'Email already registered' };

  const hashed = await hashPassword(password);
  const user = await userRepo.createUser({ name, email, password: hashed });

  return { id: user.id, name: user.name, email: user.email };
};

exports.login = async (payload) => {
  const { email, password } = validateSchema(loginSchema, payload);

  const user = await userRepo.findByEmail(email);
  if (!user) throw { status: 400, message: 'Invalid email or password' };

  const match = await comparePassword(password, user.password);
  if (!match) throw { status: 400, message: 'Invalid email or password' };

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return { token };
};