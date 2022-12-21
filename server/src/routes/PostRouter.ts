import { Router } from 'express'
import { 
  PostController 
} from '../controllers'
import {
  API_POST_UPLOAD,
  API_POST_SELECT_ALL,
} from '../config/path'
import { auth } from '../middleware/auth'
import multer from 'multer'
import { multerConfig } from '../middleware/upload'

const upload = multer(multerConfig)
const router = Router()

router.post(API_POST_UPLOAD, auth, upload.single('image'), PostController.uploadPost)
router.post(API_POST_SELECT_ALL, PostController.selectAllPost)

export default router
 