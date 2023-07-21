const express = require('express')

const {createProduct,deleteProduct,getAllCartProduct,updateProduct,getSingleCart} = require('../controller/cartController')

const router = express.Router()

router.get('/find/:userId', getSingleCart)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/', getAllCartProduct)

module.exports = router;