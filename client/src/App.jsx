import React, { useState } from "react";
import "./App.css"
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import AddContact from "./components/AddContact.jsx"

function App() {
  return (
    <>
    {/* <AddContact/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
