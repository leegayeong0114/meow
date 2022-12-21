import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import Test from './pages/Test'
import LoginPage from './pages/User/LoginPage'
import SignupPage from './pages/User/SignupPage'
import UploadTest from './pages/UploadTest'
import MyPage from './pages/User/MyPage'
import MainPage from './pages/MainPage'
import GNB from './components/layout/GNB'
import FNB from './components/layout/FNB'
import { AuthContext } from './contexts/AuthContext'

const { Content } = Layout

const Router = () => {

  const {
    authInfo: { 
      isAuth,
    },
  } = useContext(AuthContext)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* <SNB /> */}
      <Layout className="site-layout">
        <GNB />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/upload" element={<UploadTest />} />
              <Route path="/:userId" element={<MyPage />} />
              <Route path="/test" element={<Test />} />
              <Route path="/" element={!!isAuth ? <MainPage /> : <LoginPage />} />
            </Routes>
          </Content>
        <FNB />
        </Layout>      
    </Layout>
  )
}

export default Router