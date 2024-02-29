import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return ( 
        <header>
            <ul>
                <li>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
          Login
        </Link>
        <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
          Signup
        </Link>
        </li>
        </ul>
        </header>
     );
}
 
export default Dashboard;