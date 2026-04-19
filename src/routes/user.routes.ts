import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.get('/email/:email', userController.getOneByEmail);
router.post('/', userController.create);



export default router;