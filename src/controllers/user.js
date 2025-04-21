import { v4 as uuidv4 } from "uuid";
import UserModel from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const SIGN_UP = async (req, res) => {
  try {
    const salt = bcryptjs.genSaltSync(10);
    const passwordHash = bcryptjs.hashSync(req.body.password, salt);

    const user = new UserModel({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      password: passwordHash,
    });

    const response = await user.save();

    return res.status(200).json({
      message: "Signed up successfully",
    });
  } catch (err) {
    console.log(err);

    return res.status(400).json({
      message: "Problems occured",
    });
  }
};

const LOGIN = async (req, res) => {
  const data = req.body;

  const user = await UserModel.findOne({ email: data.email });

  if (!user) {
    return res.status(401).json({ message: "Bad email or password" });
  }

  const passwordMatch = bcryptjs.compareSync(data.password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: "Bad email or password" });
  }

  const token = jwt.sign(
    { email: user.email, userId: user.id },
    process.env.JWT_TOKEN,
    { expiresIn: "12h" }
  );

  res.status(200).json({
    message: "Logged in successfully",
    jwt: token,
  });
};

export { SIGN_UP, LOGIN };
