import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email , setEmail] = useState()

  return (  
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
              <button>
      <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
          Back
        </Link>
      </button>
      <div className="bg-white p-2 rounded w-30">
        <h2> Register </h2>
        <form >
            <label htmlFor="username" className="mb-3">
             Login ID
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              autoComplete="on"
              name="username"
              className="form-control rounded-0"
              // onChange={(e) => setName(e.target.value)}
            />
          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Email Address"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              // onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            {" "}
            Login{" "}
          </button>
        </form>
        <Link
        to='/register'
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign-Up
        </Link>

      </div>
    </div>
  );
}
