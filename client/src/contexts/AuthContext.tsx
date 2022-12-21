import { createContext, useReducer } from 'react'
import { authReducer, AuthState } from '../reducers/AuthReducer'
import { AuthActionType } from '../reducers/type'
import { api } from '../utils/axiosInstance'

const { CHECK_AUTH, SIGN_OUT } = AuthActionType

interface AuthContextDefault {
  authInfo: AuthState
  authentication: () => void
  signOut: () => void
}

export const authInit = {
  isAuth: false,
  authUser: {
    uid: '',
    userId: '',
    userProfileImage: ''
  }
}

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authInit,
  authentication: () => { },
  signOut: () => { }
})

type AxiosReponse = {
  isAuth: boolean
  authUser: {
    uid: string
    userId: string
    userProfileImage: string
  }
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [authInfo, dispatch] = useReducer(authReducer, authInit)
  const authentication = async () => {

    const { data } = await api().post<AxiosReponse>(`/api/auth`)

    return dispatch({
      type: CHECK_AUTH,
      payload: data
    })
  }

  const signOut = () => {
    return dispatch({
      type: SIGN_OUT,
      payload: authInit
    })
  }

  const AuthContextData = {
    authInfo,
    authentication,
    signOut
  }

  return (
    <AuthContext.Provider value={AuthContextData}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider