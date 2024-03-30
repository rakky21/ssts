import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/additem" element={<AddItem />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
