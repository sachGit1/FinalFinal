const express = require('express');
const { addProduct, getProductById, getAllProductsOfProvider, deleteProduct } = require('../controllers/products');
const { isProvider } = require('../middleware/isProvider');
const router = express.Router()
const multer = require('multer')

const storage = multer.memoryStorage()
const upload = multer({storage});

router.post('/', isProvider,upload.single('productImage'), addProduct)

router.delete('/:_id', isProvider, deleteProduct)

router.get('/provider/:_id',getAllProductsOfProvider)

router.get('/:_id', getProductById);

module.exports = router