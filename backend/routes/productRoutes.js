const express = require('express')

const {createProduct,deleteProduct,getProduct,getSinglePoduct,updateProduct} = require('../controller/productController')

const router = express.Router()

router.get('/find/:id', getSinglePoduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/', getProduct)

module.exports = router;