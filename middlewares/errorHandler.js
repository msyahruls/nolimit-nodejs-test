module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(err.stack);

  res.status(status).json({
    success: false,
    message,
    data: err.data || {},
  });
};