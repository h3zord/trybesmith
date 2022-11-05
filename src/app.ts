import express from 'express';
import 'express-async-errors';
import productRoutes from './routes/product.routes';
import userRouters from './routes/user.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);

app.use('/users', userRouters);

export default app;
