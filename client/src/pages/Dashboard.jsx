import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import LoggedIn from "../components/LoggedIn";

import UserDetails from "../components/UserDetails";

// HOME

// The second argument, the empty array makes it so that it only fires when it first renders
const Dashboard = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
        p;
      }
    };
    fetchUsers().catch((error) => alert(error.message));
  }, []);

  return (
    <Layout>
      <LoggedIn isLoggedIn={true} />
      <div className="userDashboard">
        {users &&
          users.map((user) => <UserDetails key={user._id} user={user} />)}
      </div>
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
