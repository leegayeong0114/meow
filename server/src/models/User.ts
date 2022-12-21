import mongoose, { model } from 'mongoose'
import { IUser } from '../interfaces/IUser'

const UserSchema = new mongoose.Schema<IUser>({
  userNo: {
    type: Number,
  },
  userId: {
    type: String,
    unique: true,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userProfileImage: {
    type: String,
    default: 'defalut',
    required: true,
  },
  posts: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post'
  }]
},{
  collection: 'USER',
  timestamps: true,
})

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema)