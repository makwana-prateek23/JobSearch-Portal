import React, { useContext } from "react";
import Layout from "../components/Layout";
import Internship from "../components/Internship";
import { DataContext } from "../Contexts/Data-context";

const InternShips = () => {
  const { internships } = useContext(DataContext);

  return (
    <Layout>
      <h3 className="my-4">Available internship</h3>
      <Internship internships={internships} />
    </Layout>
  );
};

export default InternShips;
