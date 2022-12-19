import mongoose, { model } from 'mongoose'
import { IPost } from '../interfaces/IPost'

const PostSchema = new mongoose.Schema<IPost>({
  postId: {
    type: Number,
  },
  userId: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  fileId: {
    type: String,
    default: 'randomFileIds',
    required: true,
  },
  tag: {
    type: String,
    default: ''
  },
  createdDt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  writer: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
},{
  collection: 'POST'
})
export default model<IPost>('Post', PostSchema)