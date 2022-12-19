import { AuthActionType } from './type'
const { TOGGLE_AUTH, SIGN_OUT } = AuthActionType

interface User {
  userNo: number
  userId: string
  userProfileImage: string
}

export type AuthState = User

type AuthAction = {
  type: AuthActionType
  payload: User
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  const { payload } = action
  console.log('authReducer : ')
  console.log(state)
  console.log(payload)
  switch (action.type) {
    case TOGGLE_AUTH:
      return {
        ...state,
        userNo: payload.userNo,
        userId: payload.userId,
        userProfileImage: payload.userProfileImage
      }
    case SIGN_OUT:
      return {
        ...state,
        userNo: 0,
        userId: '',
        userProfileImage: ''
      }
    default:
      return state
  }
}