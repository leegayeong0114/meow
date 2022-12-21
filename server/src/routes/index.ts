import { Router } from 'express'
import AuthRouter from './AuthRouter' 
import UserRouter from './UserRouter' 
import PostRouter from './PostRouter' 
import FileRouter from './FileRouter' 

const router = Router()

router.use(AuthRouter)
router.use(UserRouter)
router.use(PostRouter)
router.use(FileRouter)

export default router