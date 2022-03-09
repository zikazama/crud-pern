const express = require("express");
 
const { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} = require("../controllers/Products.js");
 
const router = express.Router();
 
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
 
exports.productRoutes = router;