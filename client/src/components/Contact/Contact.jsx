import React, { useState, useEffect } from "react";
import "./contact.css";
import User from "../User/User";
import {fetchData,getData} from "../../api/Data.js"

const Contact = ({ toDisplayCONT }) => {

  const [val, setSearchTerm] = useState("");
  const [Arr, setArr] = useState([]);

  const filterARR = Arr.filter((user) =>
    user.name.toLowerCase().includes(val.toLowerCase())
  );

  useEffect(() => {
    const loadData = async () => {
      await fetchData();
      setArr(getData());
    };
    loadData();
  }, []);


  return (
    <div>
      <div className="popup-container">
        <div className="popup-content">
          <input
            type="text"
            placeholder="Search"
            value={val}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="user-list">
            {filterARR.map((ele) => (
              <User name={ele.name} imgL={ele.imgL} text={ele.text} />
            ))}
          </div>
          <button onClick={toDisplayCONT}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
