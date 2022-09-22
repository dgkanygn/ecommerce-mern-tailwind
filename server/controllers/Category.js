import Category from "../models/Category.js";
import Product from "../models/Product.js";

export const createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      title: req.body.title,
      uniqueName: req.body.uniqueName,
    });

    return res.status(200).json({ message: "kategori oluşturuldu", category });
  } catch (error) {
    return res.json(error);
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(201).json({ categories });
  } catch (error) {
    return res.json(error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    return res.status(200).json({ message: "kategori silindi." });
  } catch (error) {
    return res.json(error);
  }
};

export const getByUniqueName = async (req, res) => {
  try {
    const category = await Category.find({ uniqueName: req.params.id });
    return res.status(200).json({ category });
  } catch (error) {
    // return res.json(error);
  }
};
