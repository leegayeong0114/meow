import { 
  Request, 
  Response, 
  NextFunction,
} from 'express'

const auth = async (
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  try {

    const isAuth = req.body.isAuth
    const authInfo = req.body.authInfo

    const authUser = {
      uid: !!isAuth ? authInfo.user.uid : '',
      userId: !!isAuth ? authInfo.user.userId : '',
      userProfileImage: !!isAuth ? authInfo.user.userProfileImage : 'default.png',
    }
    
    return res.send({
      isAuth,
      authUser: authUser
    })

  } catch(err) {
    next(err)
  }
}

export default {
  auth
}