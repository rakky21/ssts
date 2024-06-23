import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="aboutUs">
        <h2> About Us</h2>
        <div className="aboutUsDetails">
          <h3>Projects</h3>
          <img src="img" />
          <p> This is the description section</p>
        </div>
      </div>

      <Outlet />
    </Layout>
  );
}
export default App;
