import React, { 
  useEffect, 
  useState 
} from 'react'
import axios from 'axios'
import { IUser } from './types'

function App() {

  const [userList, setUserList] = useState<IUser[]>([])

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')

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

  const onClickLoginkHandler = async () => {
    let data = {
      name: signupName,
      email: signupEmail,
      password: signupPassword
    }

    const res = await axios.post('/api/users/login', data)
    console.log(res.data)
    if(!res.data.success) alert(res.data.errorMsg)
  }

  const onClickSignupkHandler = async () => {
    let data = {
      name: signupName,
      email: signupEmail,
      password: signupPassword
    }

    const res = await axios.post('/api/users/signup', data)
    console.log(res.data)
    if(!res.data.success) alert(res.data.errorMsg)
  }
  
  return (
    <div className='app'>
      {
        userList && userList.map((user: IUser, idx: number) => {
          return <h5 key={idx}>{idx + 1}. {user.email} / {user.password}</h5>
        })
      }
      <div>
        <p>로그인</p>
        <input type="text" placeholder="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}/><br/>
        <input type="text" placeholder="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}/><br/>
        <button type="button" onClick={onClickLoginkHandler}>로그인</button>
      </div>
      <div>
        <p>회원가입</p>
        <input type="text" placeholder="name" value={signupName} onChange={(e) => setSignupName(e.target.value)}/><br/>
        <input type="text" placeholder="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/><br/>
        <input type="text" placeholder="password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}/><br/>
        <button type="button" onClick={onClickSignupkHandler}>회원가입</button>
      </div>
    </div>
  )
}

export default App
