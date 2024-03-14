import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      {" "}
      Nav bar here
      <Link
        to="/"
        className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
      >
        Back
      </Link>
    </div>
  );
};

export default Nav;
