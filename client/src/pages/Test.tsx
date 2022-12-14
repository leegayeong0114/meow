import React, { 
  useEffect, 
  useState 
} from 'react'
import axios from 'axios'
import { IUser } from '../types'
import UserInfoModal from '../components/Modal'

function Test() {

  const [userList, setUserList] = useState<IUser[]>([])

  useEffect(() => {
    getAllUser()
  }, [userList])

  const getAllUser = async () => {
    try {
      const res = await axios.post('/api/users/select-all-user')
      setUserList(res.data.userList)
    } catch (error) {
      console.log(error)
    }
  }

  const onClickUser = () => {
    return (
      <UserInfoModal />
    )
  }
  
  return (
    <>
      <div className="app">
        {
          userList && userList.map((user: IUser, idx: number) => {
            return <h5 key={idx} onClick={onClickUser}>{idx + 1}. {user.email} / {user.name} / {user.password}</h5>
          })
        }
      </div>
    </>
  )
}

export default Test
