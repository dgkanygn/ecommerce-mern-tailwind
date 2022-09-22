import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "hiç kullanıcı yok" });
    } else {
      return res.status(200).json({ users });
    }
  } catch (error) {
    return res.json({ error });
  }
};

export const getUser = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "aranan kullanıcı bulunamadı" });
    } else {
      return res.status(200).json({ user });
    }
  } catch (error) {
    return res.json({ error });
  }
};

