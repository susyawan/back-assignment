const express = require('express')
const categoryRoute = require('../controller/category.controller')
const productRoute = require('../controller/product.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello World'})
})

// Category
router.get('/category', categoryRoute.listCategory)
router.get('/category/:id', categoryRoute.detailCategory)
router.post('/category', categoryRoute.insertCategory)
router.put('/category/:id', categoryRoute.updateCategory)
router.delete('/category/:id', categoryRoute.deleteCategory)

// Product
router.get('/product', productRoute.listProduct)
router.get('/product/:id', productRoute.detailProduct)
router.post('/product', productRoute.insertProduct)
router.put('/product/:id', productRoute.updateProduct)
router.delete('/product/:id', productRoute.deleteProduct)

module.exports = router