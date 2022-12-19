import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import { 
  IPost, 
  IPostInputDto, 
} from '../interfaces/IPost'
import PostService from '../service/PostService'

const uploadPost = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    // PostId, content, fileId, tag?
    const { userId, content, tag }: IPostInputDto = req.body
    const uploadPost = await PostService.savePost({ 
      userId: userId, 
      content: content,
      tag: tag,
    })

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
    const postList: IPost[] = await PostService.findAllPost()
    return res.status(200).json({ postList })
  } catch(err) {
    next(err)
  }
}

export default {
  uploadPost,
  selectAllPost
}