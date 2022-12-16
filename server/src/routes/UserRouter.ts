import { Router } from 'express'
import { 
  UserController 
} from '../controllers'
import {
  API_USERS_SIGNUP,
  API_USERS_LOGIN,
  API_USERS_AUTH,
  API_USERS_SELECT_ALL,
  API_USERS_SELECT_ONE,
} from '../config/path'
import { authMiddleware } from '../middleware/AuthMiddleware'

const router = Router()

router.use(API_USERS_SIGNUP, UserController.signUp)
router.use(API_USERS_LOGIN, UserController.logIn)
router.use(API_USERS_AUTH, authMiddleware, UserController.auth)
router.use(API_USERS_SELECT_ALL, UserController.selectAllUser)
router.use(API_USERS_SELECT_ONE, UserController.selectOneUser)

export default router
 