import { IPost } from "./IPost"

export interface IUser {
  userNo: number
  userId: string
  userPassword: string
  userProfileImage: string
  userSignupDate: Date
  posts: IPost[]
}

export interface IUserInputDTO {
  userId: string
  userPassword: string
  userProfileImage?: string
  userSignupDate?: Date
}

export interface userUniqueSearchInput {
  userId : string
}
