const errorMiddleware = (err, _req, res, _next) => {
  console.log('err', err);
  res.status(err.status || 500).json({
  message: err.message,
  error: err.status || 500,
  });
};
module.exports = errorMiddleware;
