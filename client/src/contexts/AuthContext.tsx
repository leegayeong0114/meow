import { createContext, useReducer } from 'react'
import { authReducer, AuthState } from '../reducers/AuthReducer'
import { AuthActionType } from '../reducers/type'
import { api } from '../utils/axiosInstance'

const { TOGGLE_AUTH, SIGN_OUT } = AuthActionType

interface AuthContextDefault {
  authInfo: AuthState
  authentication: () => void
  signOut: () => void
}

const authInit = {
  userNo: 0,
  userId: '',
  userProfileImage: ''
}

export const AuthContext = createContext<AuthContextDefault>({
  authInfo: authInit,
  authentication: () => { },
  signOut: () => { }
})

type AxiosReponse = {
  userNo: number
  userId: string
  userProfileImage: string
}

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [authInfo, dispatch] = useReducer(authReducer, authInit)

  const authentication = async () => {
    const { data } = await api().post<AxiosReponse>(`/api/users/auth`)
    return dispatch({
      type: TOGGLE_AUTH,
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