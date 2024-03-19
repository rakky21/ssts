import { Link } from "react-router-dom";
import style from "./header.module.css";

function Nav({ children }) {
  return (
    <header className={style.nav}>
      <h1 className="nombre">
        Rak
        <Link to="/">city</Link>
      </h1>
      <ul className={style.nav_left_display}>
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

      <ul className={style.nav_right_display}>
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
