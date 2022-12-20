import Post from '../models/Post'
import { 
  IPost,
  IPostInputDto,
} from '../interfaces/IPost'

const savePost = (
  data: IPostInputDto
) => {
  const post = new Post(data)
  return post.save()
}

const findAllPost = (
) => {
  return Post.find().populate('author')
}

export default {
  savePost,
  findAllPost
}