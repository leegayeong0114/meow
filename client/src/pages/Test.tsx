import React, { 
  useEffect, 
  useState 
} from 'react'
import { IUser } from '../types'
import { api } from '../utils/axiosInstance'
import { Empty } from 'antd'

const Test: React.FC = () => {

  const [userList, setUserList] = useState<IUser[]>([])

  useEffect(() => {
    getAllUser()
  }, [])

  const getAllUser = async () => {
    try {
      const res = await api().get('/api/users/select-all-user')
      setUserList([...res.data.userList])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      <p>long content</p>
      {
        userList && userList.length !== 0 
        ?
        userList.map((user: IUser, idx: number) => {
          return <h5 key={idx}> {idx + 1} / {user.userId} / {user.userPassword}</h5>
        })
        :
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      }
    </div>
  )
}

export default Test
