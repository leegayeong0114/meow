import React, { useContext, useEffect, useState } from 'react'
import { Divider, Drawer, Layout, List, theme } from 'antd'
import { AuthContext } from '../../contexts/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


const { Header } = Layout

const GNB: React.FC = () => {

  const navigate = useNavigate()
  const location = useLocation()
  
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const {
    authInfo: { isAuth, authUser },
    authentication,
    signOut
  } = useContext(AuthContext)

  useEffect(() => {
    authentication()
  }, [])
  
  useEffect(() => {
    if (!!isAuth && (location.pathname === '/login' || location.pathname === '/signup')) {
      navigate('/')
    }
  }, [authUser])
  
  const onSignOut = () => {
    localStorage.removeItem('accessToken')
    authentication()
    closeDrawer()
    navigate('/')
  }

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const closeDrawer = () => {
    setOpen(false)
  }

  const goPage = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    setOpen(false)
    navigate(url)
  }

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Divider orientation="left" plain>
        <MenuUnfoldOutlined style={{ fontSize: '30px', color: '#08c' }} onClick={showDrawer} />
        <Drawer 
          title="MENU" 
          placement="left" 
          footer={!!isAuth ? <div onClick={onSignOut}>로그아웃</div> : ''}
          onClose={closeDrawer} 
          open={open}>
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
          >
            <List.Item>
              <Link onClick={(e) => goPage(e, '/')} to={'/'}>메인페이지</Link>
            </List.Item>
            <List.Item>
              <Link onClick={(e) => goPage(e, `/${authUser?.userId}`)} to={`/${authUser?.userId}`}>마이페이지</Link>
            </List.Item>
            <List.Item>
              <Link onClick={(e) => goPage(e, '/login')} to={'/login'}>로그인</Link>
            </List.Item>
            <List.Item>
              <Link onClick={(e) => goPage(e, '/signup')} to={'/signup'}>회원가입</Link>
            </List.Item>
          </List>
        </Drawer>
      </Divider>
    </Header>
  )
}

export default GNB