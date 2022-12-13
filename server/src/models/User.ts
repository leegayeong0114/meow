import mongoose from 'mongoose'
import { IUser } from '../interfaces/IUser'

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  profileImage: {
    type: String,
    default: 'defalut'
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'USER'
})

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema)