import React, { 
  useEffect, 
  useState 
} from 'react'
import axios from 'axios'
import { IUser } from './types'

function App() {

  const [userList, setUserList] = useState<IUser[]>([])

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const res = await axios.post('/api/users/select-all-user')
        setUserList(res.data.userList)
      } catch (error) {
        console.log(error)
      }
    }
    getAllUser()
  }, [])
  
  return (
    <div className='app'>
      {
        userList && userList.map((user: IUser, idx: number) => {
          return <h5 key={idx}>{idx + 1}. {user.email} / {user.password}</h5>
        })
      }
    </div>
  )
}

export default App
