import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import LoggedIn from "../components/LoggedIn";

import UserDetails from "../components/UserDetails";

function Dashboard() {
  const [users, setUsers] = useState();

  // The second argument, the empty array makes it so that it only fires when it first renders

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
      }
    };
    fetchUsers().catch((error) => alert(error.message));
  }, []);

  return (
    <Layout>
      <LoggedIn isLoggedIn={true} />
      <div className="userDashboard">
        {users && users.map((user) => <UserDetails key={user._id} />)}
      </div>
      <Outlet />
    </Layout>
  );
}

export default Dashboard;
