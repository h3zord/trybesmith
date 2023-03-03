import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const loginController = new LoginController();

const router = Router();

router.post(
  '/login', 
  (req, res) => loginController.validateLogin(req, res)

  // #swagger.tags = ['Login']
  // #swagger.summary = 'Realizar o login com usuário e senha e em seguida gerar um token'
  // #swagger.description = 'Endpoint para consultar se o usuário e a senha fornecidos coincidem com os cadastrados no banco de dados.'

  /* #swagger.parameters['info'] = {
    in: 'body',
    description: 'Informações necessárias para realizar o login.',
    type: 'object',
    schema: { $ref: "#/definitions/Login" },
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/ValidToken" },
    description: 'Requisição para realizar o login efetuada com sucesso!'
  } */

  /* #swagger.responses[400] = {
    schema: { $ref: "#/definitions/InvalidLoginBodyError" },
    description: 'Erro! A requisição falhou! Todos os campos devem ser preenchidos.'
  } */

  /* #swagger.responses[401] = {
    schema: { $ref: "#/definitions/IncorrectLoginError" },
    description: 'Erro! A requisição falhou! O usuário ou a senha informados estão incorretos.'
  } */,
);

export default router;