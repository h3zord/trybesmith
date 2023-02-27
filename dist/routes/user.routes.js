"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user.controller"));
var router = (0, express_1.Router)();
var userControler = new user_controller_1.default();
router.post('/users', function (req, res) { return userControler.create(req, res); }
// #swagger.tags = ['User']
// #swagger.summary = 'Cadastrar um novo usuário e em seguida gerar um token'
// #swagger.description = 'Endpoint para cadastrar um novo usuário no banco de dados e retornar um token.'
/* #swagger.parameters['info'] = {
  in: 'body',
  description: 'Informações necessárias para criar um novo usuário.',
  type: 'object',
  schema: { $ref: "#/definitions/CreateUser" },
} */
/* #swagger.responses[201] = {
  schema: { $ref: "#/definitions/ValidToken" },
  description: 'Requisição para criar um novo usuário efetuada com sucesso!'
} */
/* #swagger.responses[400] = {
  schema: { $ref: "#/definitions/InvalidCreateBodyError" },
  description: 'Erro! A requisição falhou! Todos os campos devem ser preenchidos.'
} */
/* #swagger.responses[422] = {
  schema: { $ref: "#/definitions/IncorrectCreateBodyError" },
  description: 'Erro! A requisição falhou! Verifique se as informações fornecidas são válidas.'
} */ );
exports.default = router;
