import { UserOutlined } from '@ant-design/icons'
import { Avatar, FloatButton, List, message } from 'antd'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/post/ImageSlider'
import { IPost } from '../types'
import { api } from '../utils/axiosInstance'

const MainPage: React.FC = () => {

  useEffect(() => {
    message.success(`hi main`)
  }, [])

  const [postList, setPostList] = useState<IPost[]>([])

  useEffect(() => {
    getAllUser()
  }, [])

  const getAllUser = async () => {
    try {
      const res = await api().post('/api/post/select-all-post')
      console.log(res.data)
      setPostList([...res.data.postList])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      멘
      <div style={{ margin: '3% 10% 3%' }}>
        <List
          itemLayout="vertical"
          dataSource={postList}
          renderItem={(item) => (
            <>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={40} src={`${process.env.REACT_APP_S3_URL}upload/user/${item.author.userId}/${item.author.userProfileImage}`} icon={<UserOutlined />} />}
                  title={item.author.userId}
                />
              </List.Item>
              <ImageSlider name='asd'/>
              <List.Item>
                <List.Item.Meta
                  description={item.content}
                  // children={}
                />
              </List.Item>
            </>
          )}
          />
      </div>
      <FloatButton.BackTop />
    </div>
  )
}

export default MainPage