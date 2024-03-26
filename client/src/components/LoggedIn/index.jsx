import styles from "./loggedin.module.css";
import { PropTypes } from "prop-types";

export default function LoggedIn(props) {
  const loggedIn = (
    <h2 className={styles.loggedstyle}> Welcome {props.username} </h2>
  );

  const logPrompt = <h2> Please log in to continue</h2>;

  return props.isLoggedIn ? loggedIn : logPrompt;
}

LoggedIn.proptypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

LoggedIn.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};
