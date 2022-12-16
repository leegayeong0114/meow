import React, { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Card, Input, Space, Form, Button, InputRef } from 'antd'
import { ErrorMessage, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { api } from '../../utils/axiosInstance'

interface FormValue {
  userId: string
  userPassword: string
  userPasswordConfirm: string
}

const SignupPage: React.FC = () => {

  const navigate = useNavigate()

  const onSubmitHandler = async (data: FormValue) => {
    console.log('[signup] request data : ', data)
    const res = await api().post('/api/users/signup', data)
    console.log('[signup] response data : ', res.data)
    if(!res.data.success) alert(res.data.errorMsg)
    else {
      alert(`${data.userId}님 환영합니다!`)
      navigate('/login')
    }
  }

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required('아이디를 입력하세요'),
    userPassword: Yup.string()
      .max(15, '비밀번호는 최대 15자리까지입니다.')
      .required('비밀번호를 입력하세요'),
    userPasswordConfirm: Yup.string()
      .oneOf([Yup.ref('userPassword'), null], '비밀번호가 일치하지 않습니다')
      .required('비밀번호를 확인해주세요.'),
  })

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      <Space direction="vertical" size="large" style={{ display: 'flex' }}>
        <Card title="회원가입" size="default" style={{ minHeight: '70vh' }}>
          <Formik
            initialValues={{
              userId: '',
              userPassword: '',
              userPasswordConfirm: '',
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmitHandler}
            style={{ marginTop: '5vh' }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form 
                autoComplete="off" 
                onFinish={handleSubmit}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
              >
                <Form.Item label="아이디">
                  <Input
                    name="userId"
                    value={values.userId}
                    onChange={handleChange} />
                  <ErrorMessage name="userId" />
                </Form.Item>

                <Form.Item label="비밀번호">
                  <Input.Password
                    name="userPassword"
                    value={values.userPassword}
                    onChange={handleChange} />
                  <ErrorMessage name="userPassword" />
                </Form.Item>

                <Form.Item label="비밀번호 확인">
                  <Input.Password
                    name="userPasswordConfirm"
                    value={values.userPasswordConfirm}
                    onChange={handleChange} />
                  <ErrorMessage name="userPasswordConfirm" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                  <Button type="primary" htmlType="submit" block >
                    회원가입
                  </Button>
                </Form.Item>
              </Form>
            )}
          </Formik>
        </Card>
      </Space>
    </div>
  )
}

export default SignupPage