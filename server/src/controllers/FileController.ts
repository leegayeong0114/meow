import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import FileService from '../services/FileService'

const uploadFile = async (
  req: Request, 
  res: Response
) => {
  // if (!req.file) return 파일이 없을때는??

  try {
    const fileData: Express.Multer.File = req.file
    const data = await FileService.uploadFile(fileData)

    res.status(200).send({
      success: true,
      data: data
    })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false
    })
  }
}

export default {
  uploadFile
}