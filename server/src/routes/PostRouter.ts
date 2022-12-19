import { Router } from 'express'
import { 
  PostController 
} from '../controllers'
import {
  API_POST_UPLOAD,
  API_POST_SELECT_ALL,
} from '../config/path'
import { authMiddleware } from '../middleware/AuthMiddleware'

const router = Router()

router.post(API_POST_UPLOAD, authMiddleware, PostController.uploadPost)
router.post(API_POST_SELECT_ALL, PostController.selectAllPost)

export default router
 