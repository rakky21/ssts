import Merchandise from "./components/Merchandise";
import Layout from "./components/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Merchandise />
      <Outlet />
    </Layout>
  );
}

export default App;
