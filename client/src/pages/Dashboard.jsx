import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";

import AddItemForm from "../components/AddItemForm";

const Dashboard = () => {
  return (
    <Layout>
      <AddItemForm />
      <Outlet />
    </Layout>
  );
};

export default Dashboard;
