import React from "react";
import "../css/Landing.css";
import Navbar from "../components/Navbar";
import FloatingMessage from "../components/FloatingMessage";

const Landing = () => {
  const floatingMessages = [
    {
      src: "https://randomuser.me/api/portraits/women/2.jpg",
      message: "How are you?",
    },
    {
      src: "https://randomuser.me/api/portraits/men/5.jpg",
      message: "Let's catch up later!",
    },
    {
      src: "https://randomuser.me/api/portraits/women/12.jpg",
      message: "Good morning!",
    },
    {
      src: "https://randomuser.me/api/portraits/men/8.jpg",
      message: "See you soon 👋",
    },
    {
      src: "https://randomuser.me/api/portraits/women/25.jpg",
      message: "Miss you!",
    },
    {
      src: "https://randomuser.me/api/portraits/men/23.jpg",
      message: "That sounds great!",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="landing-container">
        <div className="center-text">
          <h1>
            With private messaging and calling, you can be yourself, speak
            freely and feel close to the most important people in your life no
            matter where they are.
          </h1>
        </div>
      </div>
      {
        floatingMessages.map(ele => {
          return (
            <FloatingMessage
            src={ele.src}
            message={ele.message}/>
          )
        })
      }
      
    </>
  );
};

export default Landing;
