import Sidebar from './components/Sidebar/Sidebar'
import ChatList from './components/ChatList/ChatList'
import ChatWindow from './components/ChatWindow/ChatWindow'
import './App.css'
import Login from './components/Login/Login'

function App() {
  return (
    <div className="container">
      <Login/>
      {/* <Sidebar/>
      <ChatList/>
      <ChatWindow/> */}
    </div>
  )
}

export default App
