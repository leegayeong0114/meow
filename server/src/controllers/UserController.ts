import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { IUser, IUserInputDTO } from '../interfaces/IUser'
import { UserService } from '../service'
import { JWT_SECRET_CODE } from '../config/jwt'
import { 
  USER_ALREADY_EXISIST, 
  USER_EMAIL_NOTFOUND,
  USER_PASSWORD_NOTMATCHED
} from '../config/errorMsg'

const signUp = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const { name, email, password }: IUserInputDTO = req.body

    // 기존 사용자인지 확인
    const foundUser = await UserService.findUserById({ email })
    if(foundUser) {
      return res.json({
        success: false,
        errorMsg: USER_ALREADY_EXISIST
      })
    } 

    // 비밀번호 암호화
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const createdUser = await UserService.saveUser({ name, email, password: hashedPassword })

    const payload = {
      user: {
        email: createdUser.email,
      },
    }

    jwt.sign(
      payload,
      JWT_SECRET_CODE,
      { expiresIn: 36000 },
      (err, token) => {
        if(err) throw err
        res.json({
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
    const { email, password } = req.body
    const user = await UserService.findUserById({ email })

    console.log(await UserService.findAllUser())

    if(!user){
      return res.json({
        success: false,
        errorMsg: USER_EMAIL_NOTFOUND
      })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
      return res.json({
        success: false,
        errorMsg: USER_PASSWORD_NOTMATCHED
      })
    }

    const payload = {
      user: {
        email: user.email
      }
    }

    console.log(user)
    jwt.sign(
      payload,
      JWT_SECRET_CODE,
      { expiresIn: 36000 },
      (err, token) => {
        if(err) throw err
        res.json({ 
          success: true,
          token 
        })
      }
    )
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
    return res.send({ userList })
  } catch(err) {
    next(err)
  }
}

export default {
  signUp,
  logIn,
  selectAllUser,
}