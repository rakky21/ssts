import Display from "../components/Display";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <Layout>
      <p>HELLO WORLD!!! IT'S TIME!</p>
      {/* THIS WILL ONLY DISPLAY THE MOST TOP ITEM BEFORE YOU LOGIN. ONCE YOU
      LOGIN. YOU WILL BE ABLE TO SEE EVERYTHING ELSE */}
      <Display />
      <Outlet />
    </Layout>
  );
};

export default Home;
