import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
