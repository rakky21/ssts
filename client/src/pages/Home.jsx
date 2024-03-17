import Card from "../components/Card";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div>
        HELLO WORLD!!! IT'S TIME!
      </div>
      <Outlet />
    </Layout>
  );
};

export default Home;
