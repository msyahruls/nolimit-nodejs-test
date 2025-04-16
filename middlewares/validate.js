const { error: errorResponse } = require('../helpers/responseHandler');

module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return errorResponse(res, 'Validation failed', 400, error.details.map(e => e.message));
    }

    next();
  };
};