import { Send } from 'lucide-react'
import React,{useState} from 'react'
import "./ChatText.css"

const ChatText = ({addTEXT}) => {

  const [value, setvalue] = useState("")

  return (
    <div className="inputContainer">
      <input 
        type="text" 
        className="chatTEXT" 
        placeholder="Write a message..."
        value={value}
        onChange={ (e) => {
          setvalue(e.target.value)
        }}
      />
      <div className='sendBtn' onClick={ () => {
        if(value){
          addTEXT(value)
          setvalue("")
        }
      }}>
        <Send/>
      </div>
    </div>
  )
}

export default ChatText