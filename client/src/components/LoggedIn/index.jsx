import { Outlet } from "react-router-dom";

export default function LoggedIn(props) {
  if (props.isLoggedIn) {
    return <h2> Welcome {props.username}</h2>;
  }
}
