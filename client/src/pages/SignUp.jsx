import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    agreement: "",
    subscription: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const user = { data };

    const response = await fetch("./api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setData("");
      setError(null);
      console.log("New user added");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <Layout>
      <div className="signupStyle">
        <h2> Sign-Up </h2>
        <form onSubmit={handleSubmit}>
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
          <br />
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
          {/* TOGGLED TO RECEIVE NEWS OR NOT */}

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
