"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_controller_1 = __importDefault(require("../controllers/order.controller"));
var token_middleware_1 = __importDefault(require("../middlewares/token.middleware"));
var orderController = new order_controller_1.default();
var router = (0, express_1.Router)();
router.post('/orders', token_middleware_1.default, function (req, res) { return orderController.create(req, res); }
// #swagger.tags = ['Order']
// #swagger.summary = 'Cadastrar um novo pedido'
// #swagger.description = 'Endpoint para cadastrar um novo pedido no banco de dados.'
/* #swagger.parameters['authorization'] = {
  in: 'header',
  description: 'Token necessário para criar um novo pedido.',
  type: 'string',
  default: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJlaWdhbCJ9LCJpYXQiOjE2Nzc0MjQ4MjIsImV4cCI6MjU0MTMzODQyMn0.Eyf-26E5EJN0A9P3ls1RImCG6tVZygCVTCq6EJmQV84'
} */
/* #swagger.parameters['info'] = {
  in: 'body',
  description: 'Informações necessárias para criar um novo pedido.',
  type: 'object',
  schema: { $ref: "#/definitions/CreateOrder" },
} */
/* #swagger.responses[201] = {
  schema: { $ref: "#/definitions/CreatedOrder" },
  description: 'Requisição para criar um novo pedido efetuada com sucesso!'
} */
/* #swagger.responses[400] = {
  schema: { $ref: "#/definitions/InvalidCreateBodyError" },
  description: 'Erro! A requisição falhou! Todos os campos devem ser preenchidos.'
} */
/* #swagger.responses[401] = {
  schema: { $ref: "#/definitions/InvalidTokenError" },
  description: 'Erro! A requisição falhou! O token fornecido é inválido.'
} */
/* #swagger.responses[404] = {
  schema: { $ref: "#/definitions/TokenNotFoundError" },
  description: 'Erro! A requisição falhou! O token não foi encontrado.'
} */
/* #swagger.responses[422] = {
  schema: { $ref: "#/definitions/IncorrectCreateBodyError" },
  description: 'Erro! A requisição falhou! Verifique se as informações fornecidas são válidas.'
} */ );
router.get('/orders', function (req, res) { return orderController.getAll(req, res); }
// #swagger.tags = ['Order']
// #swagger.summary = 'Listar todos os pedidos'
// #swagger.description = 'Endpoint para listar todos os pedidos cadastrados no banco de dados.'
/* #swagger.responses[200] = {
  schema: { $ref: "#/definitions/OrderList" },
  description: 'Requisição para listar todos os pedidos efetuada com sucesso!'
} */ );
exports.default = router;
