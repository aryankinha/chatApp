import React, { useState } from "react";
import "./App.css";
import ChatApp from "./components/ChatApp.jsx";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Login/Signup.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<h1>YOU aer home</h1>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="*" element={<Login />} />
      </Routes>
      {/* <div className="container">
      {!toShowLgin ? (
        <>
          <Sidebar />
          <ChatList />
          <ChatWindow />
        </>
      ) : (
        <Login toChange={toChange} />
      )}
    </div> */}
    </>
  );
}

export default App;
