import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import photographia from "../assets/handshake.jpg";
import React, { useState } from "react";

const Login = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Layout>
      <section className="loginSection">
        <div className="loginSignup ">
          <p>
            {" "}
            Don't have an account? Sign up today to view more items and find out
            more about our community!
          </p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Register
          </Link>
          <img src={photographia} className="handshake" />
        </div>
        <div className="loginStyle">
          <h2> Login </h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              id="username"
              placeholder="Username"
              autoComplete="on"
              name="username"
              className=""
              value={formState.username}
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            <br />
            <input type="checkbox" id="rememberMe" />
            Remember me
            <br />
            <input type="checkbox" id="agreementMerch" />
            Forgot password?
            <br />
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
