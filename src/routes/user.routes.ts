import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { hasReaderRole } from '../middlewares/user.middleware';

const router = Router();

router.get('/', userController.getAllUsers);
router.get('/email/:email', userController.getOneByEmail);
router.post('/', authenticate, hasReaderRole, userController.create);
router.put('/:username', userController.update);



export default router;