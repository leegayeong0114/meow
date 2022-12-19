import React, { FC, useContext } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { api } from '../../utils/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { Card, message, Space, Form, Input, Button } from 'antd'
import { AuthContext } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'

interface FormValue {
  userId: string
  userPassword: string
}

const LoginPage: FC = () => {

  const navigate = useNavigate() // v6 이후 useHistory => useNavigate
  const { authentication } = useContext(AuthContext);

  const onSubmitHandler = async (data: FormValue) => {
    console.log('[login] request data : ', data)
    const payload = {
      userId: data.userId,
      userPassword: data.userPassword
    }
    
    const res = await api().post('/api/users/login', payload)
    console.log('[login] response data : ', data)
    
    if(!res.data.success) alert(res.data.errorMsg)
    else {
      localStorage.setItem('accessToken', res.data.token)
      message.info('로그인 성공')
      navigate('/')
      authentication()
    }
  }

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card title="로그인" size="default" style={{ minHeight: '70vh' }}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
            initialValues={{ 
              userId: '',
              userPassword: ''
            }}
            onFinish={onSubmitHandler}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ marginTop: '5vh' }}
          >
            <Form.Item
              label="아이디"
              name="userId"
              rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="비밀번호"
              name="userPassword"
              rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
            >
              <Input.Password/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                로그인
              </Button>
            </Form.Item>
            <Link to={'/signup'}>아이디가 없으신가용?</Link>
          </Form>
        </Card>
      </Space>
    </div>
  )
}

export default LoginPage