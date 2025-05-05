import { Send } from 'lucide-react'
import React from 'react'
import "./ChatText.css"

const ChatText = () => {
  return (
    <div className="inputContainer">
      <input 
        type="text" 
        className="chat-input" 
        placeholder="Write a message..."
      />
      <div className='sendBtn'>
        <Send/>
      </div>
    </div>
  )
}

export default ChatText