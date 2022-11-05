import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

const userControler = new UserController();

router.post('/', (req, res) => userControler.create(req, res));

export default router;
