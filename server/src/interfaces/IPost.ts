import mongoose from 'mongoose'
import { IFile } from './IFile'
import { IUser } from './IUser'

export interface IPost {
  postNo: number
  content: string
  fileId: string
  tag?: string
  author: mongoose.Schema.Types.ObjectId
  files: mongoose.Schema.Types.ObjectId
}

export interface IPostInputDto {
  postNo?: number
  content: string
  fileId?: string
  tag?: string
}

export interface IPostSaveDto {
  postNo?: number
  content: string
  fileId?: string
  tag?: string
  author?: mongoose.Schema.Types.ObjectId
  fileData?: Express.Multer.File
}