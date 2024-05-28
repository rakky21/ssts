import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    agreement: "",
    subscription: "",
  });
  // const [error, setError] = useState(null);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/user", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
    });
    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setUser("");
      setError(null);
      console.log("New user added");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Layout>
      <div className="signupStyle">
        <h2> Sign-Up </h2>
        <form onSubmit={handleCreateUser}>
          <input
            id="username"
            type="text"
            name="username"
            autoComplete="on"
            value={user.username}
            placeholder="Username"
            className="form-control rounded-0"
            onChange={handleChange}
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            value={user.email}
            placeholder="Email Address"
            className="form-control rounded-0"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={user.password}
            placeholder="Password"
            className="form-control rounded-0"
            onChange={handleChange}
          />
          {/* TOGGLED TO RECEIVE NEWS OR NOT */}

          <button type="submit" className="btn">
            Register
          </button>
        </form>
        <p> Already Have an Account? </p>
        <Link to="/login" className="btn">
          Login
        </Link>

        {/* <I read the NAME Terms of Service and I agree to the terms.
        I read the Pricay Policy and I agree to the terms. */}
      </div>
    </Layout>
  );
};

export default SignUp;
