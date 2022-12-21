import mongoose, { model } from 'mongoose'
import { IPost } from '../interfaces/IPost'

const PostSchema = new mongoose.Schema<IPost>({
  postNo: {
    type: Number,
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
  author: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  files: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'File'
  }]
},{
  collection: 'POST',
  timestamps: true,
})

export default mongoose.model<IPost & mongoose.Document>('Post', PostSchema)