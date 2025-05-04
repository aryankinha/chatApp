import React from 'react'
import appLogo from '../../assets/app_Logo.png'
import './Sidebar.css'
import { MessageCircleMore, Phone, Settings, ToggleLeft, UserRoundPen, UsersRound } from 'lucide-react'
const Sidebar = () => {
  const navBtnArr = [<MessageCircleMore/>,<UsersRound/>,<Phone/>]
  return (
    <div className='sidebar'>
        <div className='imgBox'><img src={appLogo} /></div>

        <ul className='navBtn'>
          {
            navBtnArr.map( ele => (
              <li>{ele}</li>
            ))
          }
        </ul>
        
        <div><Settings /></div>
        
        <div className='colorC'><ToggleLeft/></div>
        <div children='profile'><UserRoundPen/></div>
    </div>
  )
}

export default Sidebar