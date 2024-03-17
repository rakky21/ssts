import { Link } from "react-router-dom";

function Nav({ children }) {
  return (
    <header className="nav background_main">
      Rakcity
      <ul className="nav_left_display">
        <li href="#">
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Home{" "}
          </Link>
        </li>
        <li href="#">
          <Link
            to="/about"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            About{" "}
          </Link>
        </li>
      </ul>
      <ul className="nav_right_display">
        <li>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Signup
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
