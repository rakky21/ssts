import Merchandise from "../components/Merchandise";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <Merchandise />
      <Outlet />
    </Layout>
  );
};

export default Home;
