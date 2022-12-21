import AWS from 'aws-sdk'
import { aws } from '../config/aws'

export const storage: AWS.S3 = new AWS.S3({
  accessKeyId: aws.AWS_S3_ACCESS_KEY,
  secretAccessKey:aws.AWS_S3_SECRET_KEY,
  region: aws.AWS_S3_REGION,
})