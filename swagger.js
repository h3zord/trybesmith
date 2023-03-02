const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'TrybeSmith API',
    description: 'Esta documentação é destinada ao projeto TrybeSmith.',
  },
  host: 'trybesmith.up.railway.app',
  basePath: '/',
  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Login',
      description: 'Endpoints',
    },
    {
      name: "User",
      description: "Endpoints"
    },
    {
      name: "Product",
      description: "Endpoints"
    },
    {
      name: "Order",
      description: "Endpoints"
    }
  ],
  definitions: {
    Login: {
      username: "reigal",
      password: "1dragaonoceu"
    },
    CreateUser: {
      username: "h3zord",
      classe: "Mage",
      level: 15,
      password: "12345678"
    },
    CreateProduct: {
      name: "Elmo de ferro",
      amount: "15 peças de ouro"
    },
    CreateOrder: {
      "productsIds": [1, 2]
    },
    CreatedOrder: {
      "userId": 1,
      "productsIds": [
        1,
        2
      ]
    },
    ProductList: [
      {
        "id": 1,
        "name": "Espada curta",
        "amount": "10 peças de ouro",
        "orderId": null
      }
    ],
    OrderList: [
      {
        "id": 1,
        "userId": 1,
        "productsIds": [
          2
        ]
      },
    ],
    ValidToken: { // 200 - 201
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6InJlaWdhbCJ9LCJpYXQiOjE2Nzc0MjQ4MjIsImV4cCI6MjU0MTMzODQyMn0.Eyf-26E5EJN0A9P3ls1RImCG6tVZygCVTCq6EJmQV84"
    },
    TokenNotFoundError: { // 404
      message: "Token not found"
    },
    InvalidTokenError: { // 401
      message: "Invalid token"
    },
    InvalidLoginBodyError: { // 400
      message: "Username or password are missing"
    },
    InvalidCreateBodyError: { // 400
      message: "All fields must be filled"
    },
    IncorrectLoginError: { // 401
      message: "Username or password invalid"
    },
    IncorrectCreateBodyError: { // 422
      message: "Check that the information is filled in correctly"
    }
  },
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = [
  './dist/routes/login.routes.js',
  './dist/routes/order.routes.js',
  './dist/routes/product.routes.js',
  './dist/routes/user.routes.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  // eslint-disable-next-line import/extensions
  await import('./dist/app.js'); // Your project's root file
});