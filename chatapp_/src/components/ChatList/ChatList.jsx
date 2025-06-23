import { CircleDashed, Search } from 'lucide-react'
import React, {useEffect,useState} from 'react'
import "./ChatList.css"
import User from '../User/User'
import {fetchData , getData} from '../../api/Data.js'

const ChatList = () => {
    const [dataArr, setDataArr] = useState([])
    const [val, setVAL] = useState("")

    let filterDATA = [...dataArr]
    filterDATA = dataArr.filter((user) =>
        user.name.toLowerCase().includes(val.toLowerCase())
    );
    
    useEffect(() => {
        const loadData = async () => {
            await fetchData();
            setDataArr(getData());
        };
        loadData()
    },[])
    
    return (
    <div className='chatlist'>

        <div className='chatText'>
            <h2>Chats</h2>
            <CircleDashed/>
        </div>

        <div className='search'>
            <Search/>
            <input type='text' placeholder='Search'
            value={val}
            onChange={ (e) => setVAL(e.target.value )}
            />
        </div>


        <div className='useList'>
        {
            filterDATA.map( (ele,idx) => (
                <User key={idx} imgL={ele.imgL} name={ele.name} text={ele.text}/>
            ))
        }

        </div>
    </div>
    )
}

export default ChatList