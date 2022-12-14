import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  return (
    <Container fluid style={{ height: '10vh' }}>
      <Link to="/"> 메뉴1 </Link>
      
      <Link to="/login"> 로그인 </Link>
      <Link to="/signup"> 회원가입 </Link>
    </Container>
  )
}

export default Header