export interface IUser{
  userId: string
  userPassword: string
  userProfileImage: string
}

export interface IPost{
  postNo: number
  content: string
  fileId: string
  tag: string
  author: IUser
  createdAt: Date
}