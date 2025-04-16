module.exports = (schema, payload) => {
  const { error, value } = schema.validate(payload, { abortEarly: false });
  if (error) {
    throw {
      status: 400,
      message: 'Validation failed',
      data: error.details.map((e) => e.message),
    };
  }
  return value;
};