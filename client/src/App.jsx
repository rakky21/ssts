import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Merchandise from "./components/Merchandise";
import Targeta from "./components/Targeta";

function App() {
  return (
    <Layout>
      <Targeta />
      <Merchandise />
      <Outlet />
    </Layout>
  );
}

export default App;
