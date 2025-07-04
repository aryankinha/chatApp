import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatList from '../components/ChatList'

const Home = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <ChatList/>
    </div>
  )
}

export default Home