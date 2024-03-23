import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import photographia from "../assets/handshake.jpg";

const Login = () => {
  // const [email , setEmail] = useState()

  return (
    <>
      <Layout>
        <section className="loginSection">
          <div className="loginSignup ">
            <p>
              {" "}
              Don't have an account? Sign up today to view more items and find
              out more about our community!
            </p>
            <Link
              to="/signup"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Register
            </Link>
            <img src={photographia} className="handshake"/>
          </div>

          <div className="loginStyle">
            <h2> Login </h2>
            <form>
              <label htmlFor="username" className="mb-3">
                Username
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
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  className="form-control rounded-0"
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe"> Remember me</label>
              </div>
              <div>
                <input type="checkbox" id="agreementMerch" />
                <label htmlFor="agreementMerch">Forgot password?</label>
              </div>
              <button type="submit" className="btn">
                {" "}
                Login{" "}
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Login;
