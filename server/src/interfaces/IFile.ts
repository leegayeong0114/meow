import mongoose from 'mongoose'

export interface IFile {
  filePath: string
  fileName: string
}

export interface IFileResponseDto {
  _id: mongoose.Schema.Types.ObjectId
  fileId: string
  filePath: string
}