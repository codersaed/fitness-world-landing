import React from "react";
import NavP from "./NavP";
import Header from "./Header";
import "./style.css";

const Home = () => {
  return (
    <div className="bg-image">
      <NavP></NavP>
      <Header></Header>
    </div>
  );
};

export default Home;
