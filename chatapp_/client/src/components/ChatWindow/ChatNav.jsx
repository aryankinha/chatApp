import React from 'react'
import logo from '../../assets/app_logo.png'
import { Phone, Search, Video } from 'lucide-react'
import './ChatNav.css'

const ChatNav = ({name="Aryan", img}) => {
  return (
    <div className='nav'>
        <div className='people'>
            <img src={logo}/>
            <h3>{name}</h3>
        </div>

        <div className='navButton'>
            <Video />
            <Phone />
            <Search />
        </div>
    </div>
  )
}

export default ChatNav