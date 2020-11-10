const {Product} = require('../models/product.model');
const { request } = require('http');
const { response } = require('express');
// const { request } = require('http')
// const { response } = require('express')

module.exports.testing = (request, response) => {
    response.json({
        message: 'it is working !!!'
    })
}

module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => {response.json(product)})
        .catch(err => {response.json(err)})
}

module.exports.getProducts = (request, response) => {
    Product.find()
        .then(products => {response.json(products)})
        .catch(err => {response.json(err)})
}

module.exports.getProduct = (request, response) => {
    Product.findOne({_id: request.params.id})
        .then(product => {response.json(product)})
        .catch(err => {response.json(err)})
}

module.exports.updateProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.findByIdAndUpdate({_id: request.params.id}, {title, price, description}, {new:true})
    .then(updatedProduct=>response.json(updatedProduct))
    .catch(err=>response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({_id: request.params.id})
        .then(product => {response.json(product)})
        .catch(err => {response.json(err)})
}