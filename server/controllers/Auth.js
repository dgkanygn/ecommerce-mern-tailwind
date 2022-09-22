import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password, bio } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "zaten bir hesabınız var" });
    } else {
      const hashedPassword = bcryptjs.hashSync(password);

      const user = await User.create({
        username,
        email,
        password: hashedPassword,
        bio,
      });
      return res.status(201).json({ user });
    }
  } catch (error) {
    return res.json({ error });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "bu email ile kayıtlı kullanıcı yok" });
    } else {
      const isPasswordCorrect = bcryptjs.compareSync(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(400).json({ message: "şifre yanlış" });
      } else {
        const token = jwt.sign(
          { username: user.username, email: user.email },
          "secret123"
        );
        return res.status(200).json({ message: "giriş başarılı", user, token });
      }
    }
  } catch (error) {
    return res.json({ error });
  }
};
