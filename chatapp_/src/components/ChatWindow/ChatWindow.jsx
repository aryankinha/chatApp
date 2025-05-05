import React from 'react'
import ChatNav from './ChatNav'
import ChatText from './ChatText'
import ChatBox from './ChatBox'

const ChatWindow = () => {
  return (
    <div>
        <ChatNav/>
        <ChatBox/>
        <ChatText/>
    </div>
  )
}

export default ChatWindow