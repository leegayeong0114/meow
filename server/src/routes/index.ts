import { Router } from 'express'
import UserRouter from './UserRouter' 
import PostRouter from './PostRouter' 

const router = Router()

router.use(UserRouter)
router.use(PostRouter)

export default router