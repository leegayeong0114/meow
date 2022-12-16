import mongoose from 'mongoose'
import { IUser } from '../interfaces/IUser'
import autoIncrement from 'mongoose-auto-increment'

const UserSchema = new mongoose.Schema({
  userNo: {
    type: Number,
  },
  userId: {
    type: String,
    unique: true,
  },
  userPassword: {
    type: String,
  },
  userProfileImage: {
    type: String,
    default: 'defalut'
  },
  userSignupDate: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'USER'
})

// UserSchema.plugin(autoIncrement.plugin, {
//     model: 'User',
//     field: 'userNo',
//     startAt: 1, //시작
//     increment: 1 // 증가 
// })

export default mongoose.model<IUser & mongoose.Document>('User', UserSchema)