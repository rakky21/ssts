// import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Dashboard />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
      </>
    </Router>
  );
}

export default App;
