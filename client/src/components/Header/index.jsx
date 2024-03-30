import { Link } from "react-router-dom";
import style from "./header.module.css";

export default function Nav({ children }) {
  return (
    <header className={style.nav}>
      <h1 className="nombre">
        Rak
        <Link to="/">city</Link>
      </h1>
      <ul className={style.nav_left_display}>
        <li href="#">
          <Link to="/">Home </Link>
        </li>

        <li href="#">
          <Link to="/about">About </Link>
        </li>

        {/* IF LOGGED IN */}
        <li href="#">
          <Link to="/dashboard">Dashboard </Link>
        </li>
        <li href="#">
          <Link to="/additem">Add an Item </Link>
        </li>
      </ul>

      <ul className={style.nav_right_display}>
        <li>
          <Link to="/login">Login</Link>

          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </header>
  );
}
