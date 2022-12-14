import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios'

interface FormValue {
  email: string
  password: string
}

const LoginPage: FC = () => {

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormValue>()

  const onSubmitHandler: SubmitHandler<FormValue> = async (data) => {
    console.log(data)
    const res = await axios.post('/api/users/login', data)
    console.log(res.data)
    if(!res.data.success) alert(res.data.errorMsg)
  }

  return (
    <Container fluid="md" style={{ height: '90vh' }}>
      <Form onSubmit={ handleSubmit(onSubmitHandler) }>
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
        <Form.Group className="mb-3 mt-4">
          <Button type="submit" variant="dark" size="lg" style={{ width: '100%' }}>로그인</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default LoginPage