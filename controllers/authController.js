const authService = require('../services/authService');
const { success } = require('../helpers/responseHandler');

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    return success(res, user, 'User registered successfully', 201);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const result = await authService.login(req.body);
    return success(res, result, 'Login successful');
  } catch (err) {
    next(err);
  }
};