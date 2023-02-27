import express from 'express';
import 'express-async-errors';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger-output.json';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import ordersRoutes from './routes/order.routes';
import loginRoutes from './routes/login.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use(loginRoutes);

app.use(userRoutes);

app.use(productRoutes);

app.use(ordersRoutes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(errorMiddleware);

export default app;
