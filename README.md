<h1 align="center">Boas-vindas ao repositório do TrybeSmith!</h1>

<h2 align="center">
  <a href="https://trybesmith.up.railway.app/doc" target="_blank">
    Swagger
  </a>
</h2>
<br/>

## Objetivo

<strong>TrybeSmith</strong> é uma loja de itens medievais em formato de API. Desenvolvemos as camadas da aplicação (Modelo, Serviço e Controlador), as operações de criação, leitura e atualização, bem como a autenticação de token para realizar as requisições.

## O que foi desenvolvido?

<strong>TrybeSmith</strong> é uma API de comércio de itens medievais que permite o cadastro e listagem de produtos e pedidos, bem como o cadastro de usuários e a realização de login. Para sua execução, foi utilizado o Docker para criar dois containers, um para o Node.js que roda o JavaScript no back-end e outro para o ambiente do banco de dados MySQL.

A linguagem escolhida para o desenvolvimento da aplicação foi o TypeScript, e o Express.js cuidou da gestão das rotas, tratamento das requisições HTTP e definição dos middlewares. Além disso, a biblioteca JWT foi utilizada para a autenticação do token durante as requisições e o Joi para as validações dos dados fornecidos via body. A estrutura da API segue o modelo MSC (Model, Service e Controller).

## Linguagens e ferramentas:
- Docker
- Node.js
- Typescript
- Express.js
- JWT
- MySQL

## Instalação e execução com Docker:

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/trybesmith.git
```

### 2 - Entre no repositório:
```
cd trybesmith
```

### 3 - Inicie os containers:
```
docker compose up -d
```

<strong>O container vai executar o node na porta 3000 e o banco de dados na porta 3306.</strong>
<br/>
➜ http://localhost:3000/

<br/>

## Endpoints

### - Login
#### Método post:
- /login ➜ Realiza o login com usuário e senha e em seguida gera um token.

<br/>

### - User
#### Método post:
- /users ➜ Cadastra um novo usuário e em seguida gera um token.

<br/>

### - Product
#### Método post:
- /products ➜ Cadastra um novo produto.

#### Método get:
- /products ➜ Lista todos ao produtos.

<br/>

### - Order
#### Método post:
- /orders ➜ Cadastra um novo pedido.

#### Método get:
- /orders ➜ Lista todos os pedidos.

