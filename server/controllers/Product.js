import Product from "../models/Product.js";
import User from "../models/User.js";

export const createProduct = async (req, res) => {
  try {
    const { title, price, description, location, category, owner } = req.body;
    const productImage = req.file.path;
    const username = owner;
    const user = await User.findOne({ username });
    const product = await Product.create({
      title,
      price,
      description,
      location,
      category,
      productImage,
      owner,
    });

    await user.updateOne({ $push: { products: product._id } });

    return res.status(201).json({ product, user });
  } catch (error) {
    return res.json({ error });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(201).json({ products });
  } catch (error) {
    return res.json({ error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndRemove(id);
    return res.status(400).json({ message: "ürün başarıyla kaldırıldı" });
  } catch (error) {
    return res.json({ error });
  }
};

export const getByIdProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json({ product });
  } catch (error) {
    return res.json({ error });
  }
};

export const getByOwnerProduct = async (req, res) => {
  try {
    const username = req.params.id;
    const products = await Product.find({ owner: username });
    return res.status(200).json({ products });
  } catch (error) {
    // return res.json({ error });
    // return console.log(error);
  }
};

export const addFavsProducts = async (req, res) => {
  try {
    const { productID } = req.params;
    const { userID } = req.body;

    const user = await User.findById(userID);

    if (!user.favs.includes(productID)) {
      await user.updateOne({ $push: { favs: productID } });

      return res.status(200).json({
        message: "ürün favorilere eklendi",
        userFavCounter: user.favs.length,
      });
    } else {
      await user.updateOne({ $pull: { favs: productID } });
      return res.status(200).json({
        message: "ürün favorilerden kaldırıldı",
        userFavCounter: user.favs.length,
      });
    }
  } catch (error) {}
};

export const addFav = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product.favorited.includes(req.body.id)) {
      const updated = await Product.findByIdAndUpdate(
        req.params.id,
        { $push: { favorited: req.body.id } },
        { new: true }
      );
      return res.status(200).json({
        message: "ürünü fav'layanlar arasına eklendiniz.",
        updated,
      });
    } else {
      const updated = await Product.findByIdAndUpdate(
        req.params.id,
        { $pull: { favorited: req.body.id } },
        { new: true }
      );

      return res.status(200).json({
        message: "ürünü fav'layanlar arasından çıkarıldınız.",
        updated,
      });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getFavs = async (req, res) => {
  try {
    const favs = await Product.find({ favorited: req.params.id });

    return res.status(200).json({ favs });
  } catch (error) {
    return res.json({ error });
  }
};

export const getByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    return res.status(200).json({ products });
  } catch (error) {
    return res.json({ error });
  }
};
