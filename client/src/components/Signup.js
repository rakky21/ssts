import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/signup", { name, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
// THIS IS WHERE I NEED TO FIX THE PROBLEMMM. It did not update. Test 2
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-2 rounded w-30">
        <h2> Sign-Up </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="checkbox" id="agreementConsent" />
            <label htmlFor="agreementConsent"> Consent Agreement</label>
          </div>
          <div>
            {/* FOR KEY ID */}
            <input type="checkbox" id="agreementMerch" />
            <label htmlFor="agreementMerch">
              {" "}
              Receive monthly subscription deals and coupons.
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Register </strong>
          </button>
        </form>
        <p> Already Have an Account? </p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          <strong>Login</strong>
        </Link>
      </div>
    </div>
  );
}
