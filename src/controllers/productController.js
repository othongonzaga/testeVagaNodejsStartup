const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Produto não encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product)
      return res.status(404).json({ error: "Produto não encontrado" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o produto" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product)
      return res.status(404).json({ error: "Produto não encontrado" });
    res.json({ message: "Produto excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting product" });
  }
};
