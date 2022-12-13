import { Router } from 'express'
import { 
  UserController 
} from '../controllers'
import {
  API_USERS_SIGNUP,
  API_USERS_LOGIN,
  API_USERS_SELECT_ALL,
} from '../config/path'

const router = Router()

router.use(API_USERS_SIGNUP, UserController.signUp)
router.use(API_USERS_LOGIN, UserController.logIn)
router.use(API_USERS_SELECT_ALL, UserController.selectAllUser)

export default router
 