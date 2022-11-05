import express from 'express';
import 'express-async-errors';
import productRoutes from './routes/product.routes';
import userRoutes from './routes/user.routes';
import ordersRoutes from './routes/order.routes';
import loginRoutes from './routes/login.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/users', userRoutes);

app.use('/orders', ordersRoutes);

app.use('/login', loginRoutes);

app.use(errorMiddleware);

export default app;
