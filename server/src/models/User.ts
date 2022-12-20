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
  userSignupDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  posts: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Post'
  }]
},{
  collection: 'USER'
})

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema)