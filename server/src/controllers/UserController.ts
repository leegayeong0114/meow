import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { 
  IUser, 
  IUserInputDTO, 
  userUniqueSearchInput
} from '../interfaces/IUser'
import { UserService } from '../services'
import { 
  JWT_SECRET_CODE,
  JWT_SALT
} from '../config/jwt'
import message from '../config/message'

const signUp = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const { userId, userPassword }: IUserInputDTO = req.body

    // 기존 사용자인지 확인
    const foundUser = await UserService.findUserById({ userId })
    if(foundUser) {
      return res.json({
        success: false,
        errorMsg: message.USER_ALREADY_EXISIST
      })
    } 

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt(JWT_SALT)
    const hashedPassword = await bcrypt.hash(userPassword, salt)

    const createdUser = await UserService.saveUser({ userId, userPassword: hashedPassword })

    const payload = {
      user: {
        userId: createdUser.userId,
      },
    }

    // jwt.sign(payload, secretKey, option)
    jwt.sign(
      payload,
      JWT_SECRET_CODE,
      { expiresIn: '1d' },
      (err, token) => {
        if(err) throw err
        res.status(200).json({
          success: true,
          token 
        })
      }
    )
  } catch(err) {
    next(err)
  }
}

const logIn = async (
  req: Request,
  res: Response, 
  next: NextFunction
) => {
  try{
    const { userId, userPassword } = req.body
    const user = await UserService.findUserById({ userId })

    if(!user){
      return res.json({
        success: false,
        errorMsg:message.USER_ID_NOTFOUND
      })
    }

    const isMatch = await bcrypt.compare(userPassword, user.userPassword)
    if(!isMatch){
      return res.json({
        success: false,
        errorMsg: message.USER_PASSWORD_NOTMATCHED
      })
    }

    const payload = {
      user: {
        userNo: user.userNo,
        userId: user.userId,
        userProfileImage: user.userProfileImage,
      }
    }

    jwt.sign(
      payload,
      JWT_SECRET_CODE,
      { expiresIn: '1d' },
      (err, token) => {
        if(err) throw err
        res.status(200).json({ 
          success: true,
          token 
        })
      }
    )
  } catch(err) {
    next(err)
  }
}

const auth = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {

    const loginInfo = req.body.loginInfo

    if(loginInfo) {
      const { userId }: userUniqueSearchInput = loginInfo.user
      const authUser = await UserService.findUserById({ userId })
      console.log(authUser)
      return res.status(200).json(authUser)
    }

    const defaultUser = {
      userNo: '',
      userId: '',
      userPassword: '',
      userProfileImage: 'defalut',
    }
    return res.json(defaultUser)
  } catch(err) {
    next(err)
  }
}

const selectAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userList: IUser[] = await UserService.findAllUser()
    return res.status(200).json({ userList })
  } catch(err) {
    next(err)
  }
}

const selectOneUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body
    const user: IUser = await UserService.findUserById({ userId })
    return res.status(200).json({ user })
  } catch(err) {
    next(err)
  }
}

export default {
  signUp,
  logIn,
  auth,
  selectAllUser,
  selectOneUser,
}