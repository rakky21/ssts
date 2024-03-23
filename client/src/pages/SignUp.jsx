import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const SignUp = () => {
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
    <Layout>
      <div className="signupStyle">
        <h2> Sign-Up </h2>
        <form onSubmit={handleSubmit}>
          
          <div>
            <label htmlFor="username">Username</label>
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

          <div>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Password</label>
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
          {/* THIS NEEDS TO BE INCORPERATED TO THE DATA BASE IN ORDER FOR THEM TO RECEIVE THE UPDATES. BOOLEAN */}
          <div>
            <input type="checkbox" id="agreementConsent" />
            <label htmlFor="agreementConsent"> Consent Agreement</label>
          </div>
          <div>
            <input type="checkbox" id="agreementMerch" />
            <label htmlFor="agreementMerch">
              {" "}
              Receive monthly subscription deals and coupons.
            </label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p> Already Have an Account? </p>
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </Layout>
  );
};

export default SignUp;
