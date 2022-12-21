import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import { 
  IPost, 
  IPostSaveDto, 
} from '../interfaces/IPost'
import { UserService } from '../services'
import FileService from '../services/FileService'
import PostService from '../services/PostService'
import { makeRandomId } from '../utils/RandomUtil'

const uploadPost = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {

    const { content, tag, author }: IPostSaveDto = req.body
    const randomFileId = makeRandomId(8, false)

    const uploadPost = await PostService.savePost({  
      content: content,
      tag: tag,
      author: author,
      fileId: randomFileId,
      fileData: req.file
    })

    const data = await FileService.uploadFile(req.file, randomFileId)

    res.json({ uploadPost })

  } catch(err) {
    next(err)
  }
}

const selectAllPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postList: IPost[] = await PostService.findAllPost().populate('files')
    return res.status(200).json({ postList })
  } catch(err) {
    next(err)
  }
}

export default {
  uploadPost,
  selectAllPost
}