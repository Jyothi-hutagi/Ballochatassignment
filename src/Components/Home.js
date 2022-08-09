import React from "react";
import "./Home.css";

import Sidebar from "./Sidebar";
const Home = () => {
  return (
    <div className="container">
      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
