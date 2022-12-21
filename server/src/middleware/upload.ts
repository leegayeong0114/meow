import { Request } from 'express'
import multer from 'multer'

// multer
type FileNameCallback = (
  errorr: Error | null, 
  filename: string
) => void

export const multerConfig = {
  storage: multer.diskStorage({
    // destination: 'upload/', multer 파일 임시 저장 경로
    filename: function (
      req: Request, 
      file: Express.Multer.File, 
      cb: FileNameCallback
    ) {
      cb(null, file.originalname)
    }
  })
}
