import Display from "../components/Display";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <p>HELLO WORLD!!! IT'S TIME!</p>
      <Display />
      <Outlet />
    </Layout>
  );
};

export default Home;
