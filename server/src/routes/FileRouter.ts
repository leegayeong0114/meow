import { Request, Response, Router } from 'express'
import multer from 'multer'
import FileController from '../controllers/FileController'
import { multerConfig } from '../middleware/upload'

const router = Router()

const upload = multer(multerConfig)

// upload.single('form 필드명')

router.use('/api/file-test', upload.single('image'), FileController.uploadFile)
router.use('/api/multi-file-test', upload.array('image', 5), (req: Request, res: Response) => {
  res.send(req.files)
})

export default router