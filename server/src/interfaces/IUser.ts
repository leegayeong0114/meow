import { IPost } from "./IPost"

export interface IUser {
  _id?: string
  userNo: number
  userId: string
  userPassword: string
  userProfileImage: string
  posts: IPost[]
}

export interface IUserInputDTO {
  userId: string
  userPassword: string
  userProfileImage?: string
}

export interface userUniqueSearchInput {
  userId : string
}
