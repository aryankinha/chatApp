import React, { useState } from "react";
import "./App.css"
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Landing from "./pages/Landing.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="*" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
