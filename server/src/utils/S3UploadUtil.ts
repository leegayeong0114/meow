import AWS from 'aws-sdk'
import { Request } from 'express'
import multer from 'multer'
import { aws } from '../config/aws'

// aws
export const storage: AWS.S3 = new AWS.S3({
  accessKeyId: aws.AWS_S3_ACCESS_KEY,
  secretAccessKey:aws.AWS_S3_SECRET_KEY,
  region: aws.AWS_S3_REGION,
})

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
