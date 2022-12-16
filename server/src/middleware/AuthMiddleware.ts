import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import jwt from 'jsonwebtoken'
import { 
  JWT_SECRET_CODE,
} from '../config/jwt'

export const authMiddleware = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {
    const loginInfo = jwt.verify(req.headers.authorization, JWT_SECRET_CODE)
    console.log(loginInfo)
    req.body.loginInfo = loginInfo
    return next()
  } catch (error) {
    return next()
  }
}