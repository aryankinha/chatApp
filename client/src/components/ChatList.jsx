import { Search, UserRoundPlus } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import "../css/ChatList.css";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { getContact } from "../api/axios";
import { UserContext } from "../context/UserContext.jsx";
import Contact from "./Contact.jsx";
import AddContact from "./AddContact.jsx";

const ChatList = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  const [somethingChange, setSomethingChange] = useState(true)
  const [contactsList, setContactsList] = useState([]);

  const [toShow,setToShow] = useState(false)

  const handelGetContacts = async () => {
    try {
      const res = await getContact(user.id);
      setContactsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelGetContacts();
  }, [somethingChange]);

  return (
    <>
    
    <div
      className="chatList"
      style={{ background: theme ? "#ffffff" : "#121212" }}
    >
      <div
        className="chatText"
        style={{ color: !theme ? "#ffffff" : "#2d3748" }}
      >
        <h2>Chats</h2>
        <UserRoundPlus className="addContactBtn" onClick={() => setToShow(prev => !prev)}/>
      </div>

      <div className="search" style={{ color: !theme ? "#ffffff" : "#2d3748" }}>
        <Search />
        <input type="text" placeholder="Search" />
      </div>

      <div className="contactList">
        {contactsList.map((contact) => {
          const { id, contactName } = contact;
          return <Contact key={id} contactName={contactName} id={id} setSomethingChange={setSomethingChange}/>;
        })}
      </div>
    </div>

    {toShow && <AddContact setToShow={setToShow} setSomethingChange={setSomethingChange}/>}
    </>
  );
};

export default ChatList;
