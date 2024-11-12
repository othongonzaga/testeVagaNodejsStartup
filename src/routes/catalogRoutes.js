const express = require('express');
const {
  createCatalog,
  getCatalogs,
  getCatalogById,
  updateCatalog,
  deleteCatalog,
} = require('../controllers/catalogController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createCatalog);
router.get('/', getCatalogs);
router.get('/:id', getCatalogById);
router.put('/:id', authMiddleware, updateCatalog);
router.delete('/:id', authMiddleware, deleteCatalog);

module.exports = router;
