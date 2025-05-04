import { CircleDashed, Search } from 'lucide-react'
import React, {useEffect,useState} from 'react'
import "./ChatList.css"
import User from '../User/User'
const ChatList = () => {
    const [dataArr, setDataArr] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then( users => {
            users = users.users
            const arr = users.map((ele) => {
                return {
                  name: ele.firstName,
                  imgL: ele.image,
                  text: ele.eyeColor
                };
              })
            setDataArr(arr)
            })
    }, [])
    
    return (
    <div className='chatlist'>

        <div className='chatText'>
            <h2>Chats</h2>
            <CircleDashed/>
        </div>

        <div className='search'>
            <Search/>
            <input type='text' placeholder='Search'/>
        </div>


        <div className='useList'>
        {
            dataArr.map( ele => (
                <User imgL={ele.imgL} name={ele.name} text={ele.text}/>
            ))
        }

        </div>
    </div>
    )
}

export default ChatList