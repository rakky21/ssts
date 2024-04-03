import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import LoggedIn from "../components/LoggedIn";

import UserDetails from "../components/UserDetails";

// HOME

function Dashboard() {
  const [users, setUsers] = useState(null);
  // FIX THIS
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const json = await response.json();

      if (response.ok) {
        setUsers(json);
        p;
      }
    };

    fetchUsers();
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
}

export default Dashboard;
