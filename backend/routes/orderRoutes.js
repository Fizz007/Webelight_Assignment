const express = require('express')

const {createOrder,deleteOrder,getOrder,getSingleOrder} = require('../controller/orderController')

const router = express.Router()

router.get('/find/:userId', getSingleOrder)
router.post('/', createOrder)
router.delete('/:id', deleteOrder)
router.get('/', getOrder)

module.exports = router;