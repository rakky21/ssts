import React from "react";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";
import Card from "../components/ProductsCard";

const About = () => {
  return (
    <Layout>
      <p> This is all about us that you need to know</p>
      <Card />
      <Outlet />
    </Layout>
  );
};

export default About;
