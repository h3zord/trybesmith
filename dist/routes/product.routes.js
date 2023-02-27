"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product.controller"));
var router = (0, express_1.Router)();
var productController = new product_controller_1.default();
router.post('/products', function (req, res) { return productController.create(req, res); }
// #swagger.tags = ['Product']
// #swagger.summary = 'Cadastrar um novo produto'
// #swagger.description = 'Endpoint para cadastrar um novo produto no banco de dados.'
/* #swagger.parameters['info'] = {
  in: 'body',
  description: 'Informações necessárias para criar um novo produto.',
  type: 'object',
  schema: { $ref: "#/definitions/CreateProduct" },
} */
/* #swagger.responses[201] = {
  schema: { $ref: "#/definitions/CreateProduct" },
  description: 'Requisição para criar um novo produto efetuada com sucesso!'
} */
/* #swagger.responses[400] = {
  schema: { $ref: "#/definitions/InvalidCreateBodyError" },
  description: 'Erro! A requisição falhou! Todos os campos devem ser preenchidos.'
} */
/* #swagger.responses[422] = {
  schema: { $ref: "#/definitions/IncorrectCreateBodyError" },
  description: 'Erro! A requisição falhou! Verifique se as informações fornecidas são válidas.'
} */ );
router.get('/products', function (req, res) { return productController.getAll(req, res); }
// #swagger.tags = ['Product']
// #swagger.summary = 'Listar todos os produtos'
// #swagger.description = 'Endpoint para listar todos os produtos cadastrados no banco de dados.'
/* #swagger.responses[200] = {
  schema: { $ref: "#/definitions/ProductList" },
  description: 'Requisição para listar todos os produtos efetuada com sucesso!'
} */ );
exports.default = router;
