import mongoose, { model } from 'mongoose'
import { IFile } from '../interfaces/IFile'

const FileSchema = new mongoose.Schema<IFile>({
  filePath: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  }
},{
  collection: 'FILE',
  timestamps: true
})

export default mongoose.model<IFile & mongoose.Document>('File', FileSchema)