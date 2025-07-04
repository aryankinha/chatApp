import React, { useState } from "react";
import "./App.css";
import ChatApp from "./components/ChatApp.jsx";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
