import React, { useState } from 'react'
import {
  AppstoreOutlined,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const { Sider } = Layout


type MenuItem = Required<MenuProps>['items'][number]
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('게시글', '/', <AppstoreOutlined  />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  getItem('내정보', '/mypage', <UserOutlined/>),
  // getItem('Team', 'sub2', <TeamOutlined />, [
  //   getItem('Team 1', '6'), 
  //   getItem('Team 2', '8')
  // ]),
  // getItem('Files', '9', <FileOutlined />),
]

const SNB: React.FC = () => {

  const [collapsed, setCollapsed] = useState(true)
  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  return (
    <Sider 
      collapsible 
      collapsed={collapsed} 
      onCollapse={(value) => setCollapsed(value)}
      style={{}}
    >
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }}></div>
      <Menu onClick={onClick} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  )
}

export default SNB