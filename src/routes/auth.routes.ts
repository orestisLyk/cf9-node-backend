import { Router } from "express";
import * as authController from "../controllers/auth.controller";


const router = Router();

/**
 * @openapi
 * /auth/login:
 *  post:
 *   summary: Login a user and receive a JWT token
 *   tags: [Authentication]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *             password:
 *               type: string
 *   responses:
 *     200:
 *       description: Successfully logged in
 *     401:
 *       description: Invalid credentials
 */
router.post("/login", authController.login);

export default router;