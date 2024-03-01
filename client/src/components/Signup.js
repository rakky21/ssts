import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function Signup() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-2 rounded w-30">
        <h2> Sign-Up </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="on"
              value={data.username}
              placeholder="Username"
              className="form-control rounded-0"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="on"
              value={data.email}
              placeholder="Email Address"
              className="form-control rounded-0"
              onChange={handleChange}

            />
          </div>

          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={data.password}
              placeholder="Password"
              className="form-control rounded-0"
              onChange={handleChange}

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
