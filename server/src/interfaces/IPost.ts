import mongoose from 'mongoose'
import { IUser } from './IUser'

export interface IPost {
  postId: number
  userId: string
  content: string
  fileId: string
  tag?: string
  createdDt?: Date
  writer: IUser
}

export interface IPostInputDto {
  postId?: number
  userId: string
  content: string
  fileId?: string
  tag?: string
}