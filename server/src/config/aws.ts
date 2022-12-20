import dotenv from 'dotenv'
dotenv.config()

export const aws = {
  AWS_S3_ACCESS_KEY: process.env.AWS_S3_ACCESS_KEY as string,
  AWS_S3_SECRET_KEY:process.env.AWS_S3_SECRET_KEY as string,
  AWS_S3_REGION: process.env.AWS_S3_REGION as string,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME as string,
}