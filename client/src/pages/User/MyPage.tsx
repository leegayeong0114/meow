import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { IUser } from '../../types'
import { api } from '../../utils/axiosInstance'

const MyPage: React.FC = () => {

  const [userInfo, setUserInfo] = useState<IUser | null>(null)

  const {
    authInfo: { authUser }
  } = useContext(AuthContext)

  useEffect(() => {
    getUserInfo()
  }, [authUser.userId])

  const getUserInfo = async () => {
    const data = {
      userId: authUser.userId
    }
    const res = await api().post('/api/users/select-one-user', data)
    setUserInfo({...res.data.user})
  }

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      {userInfo?.userId}
    </div>
  )
}

export default MyPage