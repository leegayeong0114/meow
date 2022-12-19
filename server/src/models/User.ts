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
},{
  collection: 'USER'
})

// export default mongoose.model<IUser & mongoose.Document>('User', UserSchema)
// export default mongoose.model<IUser>('User', UserSchema)
export default model<IUser>('User', UserSchema)