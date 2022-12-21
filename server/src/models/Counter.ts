import mongoose from 'mongoose'
import { ICounter } from '../interfaces/ICounter'

const CounterSchema = new mongoose.Schema<ICounter>({
  name: {
    type: String,
    required: true
  },
  countNum: {
    type: Number,
    required: true,
    default: 1
  }
},{
  collection: 'COUNTER',
})

export default mongoose.model<ICounter & mongoose.Document>('Counter', CounterSchema)
