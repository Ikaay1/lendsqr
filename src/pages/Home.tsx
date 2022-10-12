import React from "react";
import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import Users from "./Users";

const Home = () => {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className="home">
        <Users />
      </div>
    </>
  );
};

export default Home;
