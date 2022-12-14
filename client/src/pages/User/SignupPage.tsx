import React, { FC, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface FormValue {
  name: string
  email: string
  password: string
  password_confirm: string
}

const SignupPage: FC = () => {

  const navigate = useNavigate()

  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm<FormValue>()

  // 비밀번호와 비밀번호 확인이 일치하는지 검증하기 위해 "password" input 의 value 를 추적함
  const passwordRef = useRef<string | null>(null)
  passwordRef.current = watch('password')

  const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
    console.log(data)

    const res = await axios.post('/api/users/signup', data)
    console.log(res.data)
    if(!res.data.success) alert(res.data.errorMsg)
    else {
      alert(`${data.name}님 환영합니다!`)
      navigate('/login')
    }
  }

  return (
    <Container fluid="md" style={{ height: '90vh' }}>
      <Form onSubmit={ handleSubmit(onSubmitHandler) }>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>NAME</Form.Label>
          <Form.Control {...register('name', { required: true, maxLength: 20 })}/>
          {
            errors.name &&
              <Form.Text className="text-muted">이름을 입력해주세요.</Form.Text>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control {...register('email', { required: true, maxLength: 20 })}/>
          {
            errors.email &&
              <Form.Text className="text-muted">이메일을 입력해주세요.</Form.Text>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control {...register('password', { required: true, minLength: 4 })} type="password" />
          {
            errors.password &&
              <Form.Text className="text-muted">비밀번호를 입력해주세요.</Form.Text>
          }
        </Form.Group>
        <Form.Group className="mb-3" controlId="password_confirm">
          <Form.Label>PASSWORD CONFIRM</Form.Label>
          <Form.Control {...register('password_confirm', {required: true, validate: (value: string | null) => value === passwordRef.current})} type="password" />
          {
            errors.password_confirm &&
              <Form.Text className="text-muted">비밀번호와 일치하지 않습니다.</Form.Text>
          }
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Button type="submit" variant="dark" style={{ width: '100%' }}>버튼</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default SignupPage