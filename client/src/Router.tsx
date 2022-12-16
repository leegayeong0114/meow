import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import LoginPage from './pages/User/LoginPage'
import SignupPage from './pages/User/SignupPage'

import { Layout, theme } from 'antd'


import SNB from './components/layout/SNB'
import GNB from './components/layout/GNB'
import FNB from './components/layout/FNB'
import UploadTest from './pages/UploadTest'
import MyPage from './pages/User/MyPage'

const { Content } = Layout

const Router = () => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SNB />
      <Layout className="site-layout">
        <GNB />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/upload" element={<UploadTest />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/" element={<Test />} />
            </Routes>
          </Content>
        <FNB />
        </Layout>      
    </Layout>
  )
}

export default Router