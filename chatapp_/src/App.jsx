import Sidebar from './components/Sidebar/Sidebar'
import ChatList from './components/ChatList/ChatList'
import ChatWindow from './components/ChatWindow/ChatWindow'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'lucide-react'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <ChatList />
      <ChatWindow/>
    </div>
  )
}

export default App
