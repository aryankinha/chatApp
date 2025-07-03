import React,{useState} from 'react'
import ChatNav from './ChatNav'
import ChatText from './ChatText'
import ChatBox from './ChatBox'

const ChatWindow = () => {
  const [textArr, settextArr] = useState([])
  function addTEXT(value){
    settextArr([...textArr,value])
  }
  
  return (
    <div>
        <ChatNav/>
        <ChatBox textArr={textArr}/>
        <ChatText addTEXT={addTEXT}/>
    </div>
  )
}

export default ChatWindow