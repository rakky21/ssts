import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import LoggedIn from "../components/LoggedIn";

function Dashboard() {
  return (
    <>
      <Layout>
        <LoggedIn isLoggedIn={true} />
        <Outlet />
      </Layout>
    </>
  );
}

export default Dashboard;
