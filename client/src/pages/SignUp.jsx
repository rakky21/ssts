import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const SignUp = () => {
  let [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    agreement: "",
    subscription: "",
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
          <label htmlFor="username">
            Username
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
          </label>
          <br />
          <label htmlFor="email">
            Email
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
          </label>
          <label htmlFor="password">
            Password
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
          </label>
          <br />
          {/* TOGGLED TO RECEIVE NEWS OR NOT */}

          <label htmlFor="agreementConsent">
            <input
              type="checkbox"
              id="agreementConsent"
              value={data.agreement}
              onChange={handleChange}
            />
            Consent Agreement
          </label>
          <br />

          <label htmlFor="agreementMerch">
            <input
              type="checkbox"
              id="agreementMerch"
              value={data.subscription}
              onChange={handleChange}
            />{" "}
            Receive monthly subscription deals and coupons.
          </label>
          <br />

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
