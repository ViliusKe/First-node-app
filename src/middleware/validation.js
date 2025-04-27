export default (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    console.log(error);

    if (error) {
      return res.status(400).json({
        message: "you have provided bad data",
        error: error,
      });
    }

    return next();
  };
};
