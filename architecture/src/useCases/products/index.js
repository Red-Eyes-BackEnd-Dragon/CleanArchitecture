'use strict';

const addProductUseCase = require('./addProduct.useCase');
const showProductUseCase = require('./showProduct.useCase');
const updateProductUseCase = require('./updateProduct.useCase');
const deleteProductUseCase = require('./deleteProduct.useCase');

module.exports = {
    addProductUseCase,
    showProductUseCase,
    updateProductUseCase,
    deleteProductUseCase,
}