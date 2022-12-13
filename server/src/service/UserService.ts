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
  const { email } = data
  return User.findOne({ email })
}

const findAllUser = (
) => {
  return User.find()
}

export default {
  saveUser,
  findUserById,
  findAllUser
}