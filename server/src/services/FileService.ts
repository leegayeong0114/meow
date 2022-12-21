import { storage } from '../utils/S3Util'
import File from '../models/File'
import fs from 'fs'
import { IFileResponseDto } from '../interfaces/IFile'
import { aws } from '../config/aws'
import { makeRandomId } from '../utils/RandomUtil'

const uploadFile = async (fileData: Express.Multer.File, fileId: string): Promise<IFileResponseDto> => {

  const fileContent: Buffer = fs.readFileSync(fileData.path)
  const fileNamePrefix: string = makeRandomId(6, true)

  try {
    const params: {
      Bucket: string
      Key: string
      Body: Buffer
    } = {
      Bucket: aws.AWS_S3_BUCKET_NAME,
      Key: `upload/post/${fileId}/${fileNamePrefix}_${fileData.originalname}`, // 랜덤값 생성 해야함
      Body: fileContent
    }

    const result = await storage.upload(params).promise()

    const file = new File({
      fileId: fileId,
      filePath: result.Key,
      fileName: fileData.originalname
    })

    await file.save()

    const data = {
      _id: file._id,
      fileId: fileId,
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