import Post from '../models/Post'
import { 
  IPost,
  IPostSaveDto,
} from '../interfaces/IPost'
import Counter from '../models/Counter'
import { ICounter } from '../interfaces/ICounter'

const savePost = (
  data: IPostSaveDto
) => {

  Counter.findOne({ name: 'postNum' })
    .exec()
    .then((counter: ICounter) => {
      data.postNo = counter.countNum 
      const post = new Post(data)

      post.save()
        .then((result) => {
          console.log(result)
          Counter.updateOne(
            { name: 'postNum' },
            { $inc: { countNum: 1 } }
          ).then(() => {
            return {
              success: true,
              result
            }
          })
        })
    })
    .catch((err) => {
      return { success: false }
    })
}

const findAllPost = (
) => {
  return Post.find().populate('author').sort('content')
}

export default {
  savePost,
  findAllPost
}