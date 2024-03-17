import { Link } from "react-router-dom";
import Layout from "../components/Layout";

export default function Login() {
  // const [email , setEmail] = useState()

  return (
    <Layout>
      <div className="loginStyle">
        <h2> Login </h2>
        <form>
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
            <label htmlFor="password">Password</label>
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
          to="/signup"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Sign-Up
        </Link>
      </div>
      <Link
        to="/"
        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
      >
        Back
      </Link>
    </Layout>
  );
}
