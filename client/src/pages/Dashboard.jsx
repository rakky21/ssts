import { useState } from "react";

// import { Outlet } from "react-router-dom";
// import Layout from "../components/Layout";
// import LoggedIn from "../components/LoggedIn";

const Dashboard = () => {
  const [title, setTitle] = useState("");

  function handleCreateWish(e) {
    e.preventDefault();
    fetch("http://localhost:4000/wishlist", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    });
  }

  return (
    // <Layout>
    // <LoggedIn isLoggedIn={true} />
    <div className="userDashboard">
      <form onSubmit={handleCreateWish}>
        <label htmlFor="wishlist-title"> Wishlist Title: </label>
        <input
          id="wishlist-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <button className="btn"> Add Wish</button>
      </form>
    </div>
    // <Outlet />
    // </Layout>
  );
};

export default Dashboard;
