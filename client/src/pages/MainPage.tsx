import { UserOutlined } from '@ant-design/icons'
import { Avatar, List, message } from 'antd'
import React, { useEffect } from 'react'
import ImageSlider from '../components/post/ImageSlider'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

const MainPage: React.FC = () => {
  useEffect(() => {
    message.success(`hi main`)
  }, [])

  return (
    <div style={{ padding: 24, textAlign: 'center', background: 'white', minHeight: '80vh' }}>
      멘
      <div style={{ margin: '3% 10% 3%' }}>
        <List
          itemLayout="vertical"
          dataSource={data}
          renderItem={(item) => (
            <>
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size={40} icon={<UserOutlined />} />}
                  title={item.title}
                />
              </List.Item>
              <ImageSlider name='asd'/>
              <List.Item>
                <List.Item.Meta
                  description="여기는 내용이 올 자리"
                  // children={}
                />
              </List.Item>
            </>
          )}
          />
      </div>
    </div>
  )
}

export default MainPage