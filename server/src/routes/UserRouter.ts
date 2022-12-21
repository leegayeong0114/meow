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
import { auth } from '../middleware/auth'

const router = Router()

router.post(API_USERS_SIGNUP, UserController.signUp)
router.post(API_USERS_LOGIN, UserController.logIn)
router.get(API_USERS_SELECT_ALL, UserController.selectAllUser)
router.post(API_USERS_SELECT_ONE, UserController.selectOneUser)

export default router
 