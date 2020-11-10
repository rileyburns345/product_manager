const ProductController = require('../controllers/product.controller')
module.exports = function(app){
    app.get('/testing', ProductController.testing)
    app.get('/product', ProductController.getProducts)
    app.post('/product', ProductController.createProduct)
    app.get('/product/:id', ProductController.getProduct)
    app.put('/product/:id', ProductController.updateProduct)
    app.delete('/product/:id', ProductController.deleteProduct)
}
