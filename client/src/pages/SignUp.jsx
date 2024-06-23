// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../components/Layout";

// const SignUp = () => {
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     agreement: "",
//     subscription: "",
//   });
//   const [error, setError] = useState(null);
//   const handleCreateUser = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:4000/user", {
//       method: "POST",
//       body: JSON.stringify({ username, password, email }),
//     });
//     if (!response.ok) {
//       setError(json.error);
//     }
//     if (response.ok) {
//       setUser("");
//       setError(null);
//       console.log("New user added");
//     }
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   return (
//     <Layout>
//       <div className="signupStyle">
//         <h2> Sign-Up </h2>
//         <form onSubmit={handleCreateUser}>
//           <input
//             id="username"
//             type="text"
//             name="username"
//             autoComplete="on"
//             value={user.username}
//             placeholder="Username"
//             className="form-control rounded-0"
//             onChange={handleChange}
//           />
//           <br />
//           <input
//             type="email"
//             name="email"
//             id="email"
//             autoComplete="on"
//             value={user.email}
//             placeholder="Email Address"
//             className="form-control rounded-0"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             id="password"
//             autoComplete="off"
//             value={user.password}
//             placeholder="Password"
//             className="form-control rounded-0"
//             onChange={handleChange}
//           />
//           {/* TOGGLED TO RECEIVE NEWS OR NOT */}

//           <button type="submit" className="btn">
//             Register
//           </button>
//         </form>
//         <p> Already Have an Account? </p>
//         <Link to="/login" className="btn">
//           Login
//         </Link>
//       </div>
//     </Layout>
//   );
// };

// export default SignUp;
// import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../api/userAPI";

import Layout from "../components/Layout";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  // // CREATE WISH
  async function handleCreateUser(e) {
    e.preventDefault();
    const user = await createUser(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
    setUsers([...users, user]);
  }
  // //  GET WISH
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const newUser = await getUser();
  //     setUsers(newUser);
  //   }
  //   fetchUsers();
  // }, []);
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
            value={username}
            placeholder="Username"
            className="form-control rounded-0"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="on"
            value={email}
            placeholder="Email Address"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            placeholder="Password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* TOGGLED TO RECEIVE NEWS OR NOT */}

          <button className="btn">Register</button>
          <p>
            {" "}
            Signing up signifies you have read and agree to the Terms of Service
            and our Privacy Policy.
          </p>
        </form>
        <p> Already Have an Account? </p>
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
      <Outlet />
    </Layout>
  );
};

export default SignUp;
