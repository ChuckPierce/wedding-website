import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();

// Login User
router.route('/login').get(UserController.login);

// Logout user
router.route('/logout').get(UserController.logout);

export default router;
