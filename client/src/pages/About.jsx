import React from "react";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";

const About = () => {
  return (
    <Layout>
      <div> This is all about us that you need to know</div>

      <Card />
      <Outlet />
    </Layout>
  );
};

export default About;
