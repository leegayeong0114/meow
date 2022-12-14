import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Test from './pages/Test'
import LoginPage from './pages/User/LoginPage'
import SignupPage from './pages/User/SignupPage'

const Router = () => {
  return (
    <Container fluid>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Test />} />
      </Routes>
    </Container>
  )
}

export default Router