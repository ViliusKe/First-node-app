import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "user bad authorization",
    });
  }

  jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "user bad authorization",
      });
    }

    req.body.userId = decoded.userId;

    return next();
  });
};

export default authUser;
