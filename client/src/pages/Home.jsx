import Display from "../components/Display";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <Display />
      <Outlet />
    </Layout>
  );
};

export default Home;
