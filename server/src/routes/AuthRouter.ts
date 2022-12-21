import { Router } from 'express'
import { API_AUTH } from '../config/path'
import { AuthController } from '../controllers'
import { auth } from '../middleware/auth'

const router = Router()

router.post(API_AUTH, auth, AuthController.auth)

export default router