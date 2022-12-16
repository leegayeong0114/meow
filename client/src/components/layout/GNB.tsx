import React, { useContext, useEffect } from 'react'
import { Avatar, Button, Divider, Dropdown, Layout, MenuProps, theme } from 'antd'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


const { Header } = Layout

const GNB: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const {
    authInfo: { userNo, userId, userProfileImage },
    authentication,
    signOut
  } = useContext(AuthContext)

  useEffect(() => {
    console.log('header useEffect')
    authentication()
  }, [])

  useEffect(() => {
    if (userNo && (location.pathname === '/login' || location.pathname === '/signup')) {
      navigate('/');
    }
  }, [userNo])

  const onSignOut = () => {
    navigate('/login')
    signOut()
    localStorage.removeItem('accessToken')
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to='/mypage'>내정보</Link>
      ),
    },
    {
      key: '2',
      label: (
        <span onClick={() => {onSignOut()}}>로그아웃</span>
      ),
    },
  ]

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Divider orientation="right" plain>
      {
        userNo ? 
          <Dropdown menu={{ items }} placement="bottom">
            <Avatar size={'large'} icon={<UserOutlined />} style={{ backgroundColor: '#87d068' }} />
          </Dropdown>
          :
          <Button onClick={() => navigate('/login')}>로그인</Button>
      }
    </Divider>
    </Header>
  )
}

export default GNB