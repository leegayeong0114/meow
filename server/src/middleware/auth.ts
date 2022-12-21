import { 
  NextFunction, 
  Request, 
  Response 
} from 'express'
import jwt from 'jsonwebtoken'
import { 
  JWT_SECRET_CODE,
} from '../config/jwt'

export const auth = (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.log('[middle auth] auth start')
  try {
    const authInfo = jwt.verify(req.headers.authorization, JWT_SECRET_CODE)
    console.log('[middle auth] auth success')
    req.body.isAuth = true
    req.body.authInfo = authInfo
    return next()
  } catch(error) {
    console.log('[middle auth] auth fail')
    req.body.isAuth = false
    return next()
  }
}