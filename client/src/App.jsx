import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Targeta from "./components/Targeta";
import Calendar from "./components/Calendar";

function App() {
  return (
    <Layout>
      <Calendar />
      <Targeta />
      <Outlet />
    </Layout>
  );
}
export default App;
