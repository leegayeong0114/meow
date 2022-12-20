import { storage } from '../utils/S3UploadUtil'
import File from '../models/File'
import fs from 'fs'
import { IFileResponseDto } from '../interfaces/IFile'
import { aws } from '../config/aws'
import { makeRandomId } from '../utils/RandomUtil'

const uploadFile = async (fileData: Express.Multer.File): Promise<IFileResponseDto> => {

  const fileContent: Buffer = fs.readFileSync(fileData.path)
  const fileNamePrefix: string = makeRandomId(6)
  const fileId: string = '임시'

  try {
    const params: {
      Bucket: string
      Key: string
      Body: Buffer
    } = {
      Bucket: aws.AWS_S3_BUCKET_NAME,
      Key: `upload/${fileId}/${fileNamePrefix}_${fileData.originalname}`, // 랜덤값 생성 해야함
      Body: fileContent
    }

    const result = await storage.upload(params).promise()

    const file = new File({
      filePath: result.Key,
      fileName: fileData.originalname
    })

    await file.save()

    const data = {
      _id: file._id,
      filePath: result.Key
    }

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default {
    uploadFile
}