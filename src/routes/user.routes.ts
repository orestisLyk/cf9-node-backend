import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { hasReaderRole } from '../middlewares/user.middleware';
import { validate } from '../middlewares/validate.middleware';
import { createUserSchema, updateUserSchema } from "../validators/user.validator";

const router = Router();

/**
 * @openapi
 * /users:
 *  get:
 *    summary: Get all users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: A list of users
 */
router.get('/', userController.getAllUsers);

/**
 * @openapi
 * /users/email/{email}:
 *  get:
 *    summary: Get a user by email
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: email
 *        required: true
 *        schema:
 *          type: string
 *        description: The email of the user to retrieve
 *    responses:
 *      200:
 *        description: User found and returned successfully
 *      404:
 *        description: User not found by email
 */
router.get('/email/:email', userController.getOneByEmail);

/**
 * @openapi
 * /users:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *               type: string
 *              firstname:
 *                type: string
 *              lastname:
 *                type: string
 *              email:
 *                type: string
 *    responses:
 *      201:
 *        description: User created successfully

 */
router.post('/', authenticate, hasReaderRole, validate(createUserSchema), userController.create);
router.put('/:username', userController.update);



export default router;