import React from 'react'
import Router from './Router'
import AuthContextProvider from './contexts/AuthContext'

import 'antd/dist/reset.css'


const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  )
}

export default App
