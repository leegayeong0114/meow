import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import FileService from '../services/FileService'
import { httpStatus } from '../config/httpStatus'

const uploadFile = async (
  req: Request, 
  res: Response
) => {
  // if (!req.file) return 파일이 없을때는??

  try {
    const fileData: Express.Multer.File = req.file
    const data = await FileService.uploadFile(fileData, 'fileCtrl')

    res.status(httpStatus.OK)
      .send({
        success: true,
        data: data
      })

  } catch (error) {
    console.log(error)
    res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .send({
        success: false
      })
  }
}

export default {
  uploadFile
}