import User from '../models/User'
import { 
  IUser,
  IUserInputDTO, 
  userUniqueSearchInput 
} from '../interfaces/IUser'

const saveUser = (
  data: IUserInputDTO
) => {
  const user = new User(data)
  return user.save()
}

const findUserById = (
  data: userUniqueSearchInput
) => {
  const { userId } = data
  return User.findOne({ userId }).populate('posts')
}

const findAllUser = (
) => {
  return User.find().populate('posts')
}

export default {
  saveUser,
  findUserById,
  findAllUser
}