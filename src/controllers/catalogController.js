const Catalog = require("../models/Catalog");

exports.createCatalog = async (req, res) => {
  try {
    const catalog = await Catalog.create({
      ...req.body,
      user: req.user.userId,
    });
    res.status(201).json(catalog);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar catálogo" });
  }
};

exports.getCatalogs = async (req, res) => {
  try {
    const catalogs = await Catalog.find({ user: req.user.userId }).populate(
      "products"
    );
    res.json(catalogs);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar catálogos" });
  }
};

exports.getCatalogById = async (req, res) => {
  try {
    const catalog = await Catalog.findOne({
      _id: req.params.id,
      user: req.user.userId,
    }).populate("products");
    if (!catalog)
      return res.status(404).json({ error: "Catálogo não encontrado" });
    res.json(catalog);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar catálogo" });
  }
};

exports.updateCatalog = async (req, res) => {
  try {
    const catalog = await Catalog.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      { new: true }
    ).populate("products");
    if (!catalog)
      return res.status(404).json({ error: "Catálogo não encontrado" });
    res.json(catalog);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar o catálogo" });
  }
};

exports.deleteCatalog = async (req, res) => {
  try {
    const catalog = await Catalog.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!catalog)
      return res.status(404).json({ error: "Catálogo não encontrado" });
    res.json({ message: "Catálogo excluído com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir catálogo" });
  }
};
